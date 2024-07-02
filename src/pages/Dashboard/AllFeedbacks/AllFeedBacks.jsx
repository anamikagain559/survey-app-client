import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const AllFeedBacks = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: feedbacks = {},
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/surveys/feedbacks");

      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading survey data</div>;
  return (
    <div>
      <h1>Survey Feedbacks</h1>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-full lg:min-w-[800px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 lg:px-4 py-2 text-left">#</th>
                <th className="px-2 lg:px-4 py-2 text-left">Survey Title</th>
                <th className="px-2 lg:px-4 py-2 text-left">Feedback</th>
                <th className="px-2 lg:px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
                  <td className="border px-2 lg:px-4 py-2">{feedback.title}</td>
                  <td className="border px-2 lg:px-4 py-2">
                    {feedback.feedback}
                  </td>
                  <td className="border px-2 lg:px-4 py-2">
                    {feedback.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllFeedBacks;
