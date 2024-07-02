import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";

const ReportedSurvey = () => {
  const { user } = useAuth();
  const userEmail = user ? user.email : null;
  const axiosPublic = useAxiosPublic();

  const {
    data: surveys = {},
    loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["surveys", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/reports/${userEmail}`);
      return res.data;
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h2 className=" font-bold text-2xl text-center m-3 uppercase">
        Reported Surveys by Me
      </h2>
      <div className="overflow-x-auto">
        {surveys.length > 0 ? (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>

                <th>Category</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey, index) => (
                <tr key={survey._id}>
                  <th>{index + 1}</th>
                  <td>{survey.title}</td>

                  <td>{survey.category}</td>
                  <td>{survey.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No surveys found</div>
        )}
      </div>
    </div>
  );
};

export default ReportedSurvey;
