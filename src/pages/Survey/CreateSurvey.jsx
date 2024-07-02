// src/components/CreateSurvey.js
import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const CreateSurvey = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [categories, setCategories] = useState([
    "Health",
    "Technology",
    "Education",
    "Environment",
    "Sports",
  ]); // Example categories
  const [options, setOptions] = useState(["Yes", "No"]); // Initial options

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = user.email ?? null;
    const userName = user.displayName ?? null;

    const survey = {
      title,
      description,
      options,
      category,
      deadline,
      status: "publish", // default status
      timestamp: new Date(), // creation time
      userEmail: userEmail, // add user email
      userName: userName, // add user name
    };

    try {
      await axiosSecure.post("/surveys", survey);

      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Survey created successfully!",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error creating survey.",
        text: error.message,
      });
    }
  };

  return (
    <div className="pt-[100px]">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Create Survey</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Create Survey
        </button>
      </form>
    </div>
  );
};

export default CreateSurvey;
