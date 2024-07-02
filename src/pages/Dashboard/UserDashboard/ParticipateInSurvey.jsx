import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ParticipateInSurvey = () => {
  const { user } = useAuth();
  const userEmail = user ? user.email : null;
  const axiosSecure = useAxiosSecure();

  const {
    data: surveys = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["surveys", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${userEmail}/participated-surveys`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Surveys Participated</h2>
      <div className="overflow-x-auto">
        {surveys.length > 0 ? (
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">#</th>
                <th className="p-2 border border-gray-300">Title</th>
                <th className="p-2 border border-gray-300">Category</th>
                <th className="p-2 border border-gray-300">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey, index) => (
                <tr key={survey._id} className="hover:bg-gray-100">
                  <td className="p-2 border border-gray-300 text-center">{index + 1}</td>
                  <td className="p-2 border border-gray-300">{survey.title}</td>
                  <td className="p-2 border border-gray-300">{survey.category}</td>
                  <td className="p-2 border border-gray-300">{survey.deadline}</td>
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

export default ParticipateInSurvey;

