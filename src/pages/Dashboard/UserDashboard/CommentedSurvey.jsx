import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";

const CommentedSurvey = () => {
  const { role } = useRole();
  const { user } = useAuth();
  const userEmail = user ? user.email : null;
  const axiosSecure = useAxiosSecure();

  const {
    data: surveys = {},
    loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["surveys", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/comments/${userEmail}`);
      return res.data;
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h2 className=" font-bold text-2xl text-center m-3 uppercase">
        Commented Surveys by Me
      </h2>
      <div className="overflow-x-auto">
        {surveys.length > 0 ? (
          <table className="table-auto w-full min-w-full lg:min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 lg:px-4 py-2"></th>
                <th className="px-2 lg:px-4 py-2 text-left">Title</th>
                <th className="px-2 lg:px-4 py-2 text-left">Category</th>
                <th className="px-2 lg:px-4 py-2 text-left">Text</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey, index) => (
                <tr key={survey._id} className="hover:bg-gray-100">
                  <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
                  <td className="border px-2 lg:px-4 py-2">{survey.title}</td>
                  <td className="border px-2 lg:px-4 py-2">
                    {survey.category}
                  </td>
                  <td className="border px-2 lg:px-4 py-2">{survey.text}</td>
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

export default CommentedSurvey;
