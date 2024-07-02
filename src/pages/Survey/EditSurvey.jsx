import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../hooks/useAxiosSecure';


const EditSurvey = () => {
    const { surveyId } = useParams();
    const navigate = useNavigate();
    console.log(surveyId);
    const axiosSecure = useAxiosSecure();
    const {
        data: surveyData = {},
        isLoading,
        error,
        refetch,
      } = useQuery({
        queryKey: ["survey", surveyId],
        queryFn: async () => {
          const res = await axiosSecure.get(`/surveys/${surveyId}`);
          return res.data;
        },
      });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (surveyData) {
            setTitle(surveyData.title || '');
            setDescription(surveyData.description || '');
            setCategory(surveyData.category || '');
            setDeadline(surveyData.deadline || '');
            setOptions(surveyData.options || []);
        }
    }, [surveyData]);

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index] = event.target.value;
        setOptions(newOptions);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
      

        const updatedSurvey = {
            title,
            description,
            options,
            category,
            deadline,
       
        };

        try {
            await axiosSecure.put(`/surveys/${surveyId}`, updatedSurvey);
            Swal.fire({
                icon: "success",
                title: "Successful",
                text: "Survey updated successfully!",
            });
            navigate('/dashboard/mySurveyList'); // Redirect to surveyor dashboard
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error updating survey.",
                text: error.message,
            });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading survey data</div>;

    return (
        <div className='pt-[100px]'>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Edit Survey</h2>
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
                        {['Health', 'Technology', 'Education', 'Environment', 'Sports'].map((cat, index) => (
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
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring">
                    Update Survey
                </button>
            </form>
        </div>
    );
};

export default EditSurvey;
