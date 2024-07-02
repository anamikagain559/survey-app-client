import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MostVotedSurvey = () => {
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    data: surveys = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });

  if (loading) return <div>Loading...</div>;

  // Sort surveys in descending order based on vote count
  surveys.sort((a, b) => b.voteCount - a.voteCount);

  // Get the top 6 most voted surveys
  const top6Surveys = surveys.slice(0, 6);
  console.log(top6Surveys);

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-10 sm:px-20 px-8 max-w-screen-xl w-full">
        <div className="flex flex-col gap-7 items-center">
          <span className="font-semibold text-4xl text-[#233047] text-center">Featured Surveys</span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 justify-center">
          {top6Surveys.map((survey, index) => (
            <div className="flex max-w-[546px] cursor-pointer hover:shadow-lg rounded-2xl" key={index}>
              <div className="w-full bg-gradient-to-t to-[#9517AF] from-[#3206D3] px-[1px] border py-[1px] 2xl:px-0.5 2xl:py-0.5 rounded-2xl" data-aos="fade-up">
                <div className="h-full w-full bg-[#FBF4FA] rounded-2xl py-6 px-5 flex flex-col gap-2.5">
                  <div className="text-xl font-bold">Vote Count: {survey.voteCount}</div>
                  <span className="text-lg sm:text-2xl font-semibold text-[#233047]">{survey.title}</span>
                  <span className="text-md sm:text-xl font-normal text-[#233047]">{survey.description}</span>
                  <Link to={`/surveys/${survey._id}`}>
                    <button className="btn btn-primary">See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostVotedSurvey;
