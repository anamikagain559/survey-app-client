import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurvey from "../../../hooks/useSurvey";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import FeedbackModal from "./FeedbackModal";

const ManageSurveys = () => {
  const [survey, , refetch] = useSurvey();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSurveyId, setCurrentSurveyId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = (id) => {
    const currentSurvey = survey.find((surveyOne) => surveyOne._id === id);
    if (currentSurvey.status === "publish") {
      setCurrentSurveyId(id);
      setIsModalOpen(true);
    }
  };

  const updateSurveyStatus = async (id, newStatus, feedback) => {
    try {
      const response = await axiosSecure.post(`/surveys/feedback/${id}`, {
        feedback,
      });

      if (response.status === 200) {
        const updatedSurveys = survey.map((s) =>
          s._id === id ? { ...s, status: newStatus, feedback } : s
        );
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Survey updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update survey",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error updating survey", error);
    }
  };

  const handleFeedbackSubmit = (feedback) => {
    updateSurveyStatus(currentSurveyId, "unpublish", feedback);
    setIsModalOpen(false);
    setCurrentSurveyId(null);
  };


  return (
    <div>
      <h1>Manage All Surveys</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table-auto w-full min-w-full lg:min-w-[800px]">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-2 lg:px-4 py-2 text-left">#</th>
        <th className="px-2 lg:px-4 py-2 text-left">Survey Title</th>
        <th className="px-2 lg:px-4 py-2 text-left">Category</th>
        <th className="px-2 lg:px-4 py-2 text-left">Status</th>
        <th className="px-2 lg:px-4 py-2 text-left">See Response</th>
      </tr>
    </thead>
    <tbody>
      {survey.map((item, index) => (
        <tr key={item._id} className="hover:bg-gray-100">
          <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
          <td className="border px-2 lg:px-4 py-2">{item.title}</td>
          <td className="border px-2 lg:px-4 py-2 text-right">{item.category}</td>
          <td className="border px-2 lg:px-4 py-2">
            <button
              onClick={() => handleStatusChange(item._id)}
              className={`btn ${
                item.status === "publish"
                  ? "btn-success"
                  : "btn-warning"
              }`}
            >
              {item.status === "publish" ? "Unpublish" : "Unpublished"}
            </button>
          </td>
          <td className="border px-2 lg:px-4 py-2">
            <Link to={`/dashboard/surveyor/surveysResponse/${item._id}`}>
              <button className="btn btn-ghost bg-[#3ABEF9] text-base text-white">
                Response
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
};

export default ManageSurveys;
