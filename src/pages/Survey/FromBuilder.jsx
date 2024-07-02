import React, { useState } from 'react';
import axios from 'axios';

const FormBuilder = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [questions, setQuestions] = useState([{ title: '', options: ['', ''] }]);
    const [categories, setCategories] = useState(['Health', 'Technology', 'Education', 'Sports']); // Example categories

    const addQuestion = () => {
        setQuestions([...questions, { title: '', options: ['', ''] }]);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    const handleChange = (index, key, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][key] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAddOption = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options.push('');
        setQuestions(updatedQuestions);
    };

    const handleRemoveOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(updatedQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const survey = {
            title,
            description,
            category,
            deadline,
            questions,
            status: 'publish', // default status
            timestamp: new Date(), // creation time
        };

        try {
            await axios.post('https://servey-app-server.vercel.app/surveys', survey);
            alert('Survey created successfully!');
        } catch (error) {
            console.error(error);
            alert('Error creating survey.');
        }
    };
  return (
    <div className='pt-[100px]'>
    <h2>Create Survey</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    <label className="block text-gray-700">Title:</label>
    <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
    <label className="block text-gray-700">Description:</label>
    <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
    <label className="block text-gray-700">Category:</label>
    <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
        ))}
    </select>
    <label className="block text-gray-700">Deadline:</label>
    <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />

    {questions.map((question, index) => (
        <div key={index} className="border p-2 rounded-md mt-4">
            <label className="block text-gray-700">{`Question ${index + 1}:`}</label>
            <input
                type="text"
                value={question.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <label className="block text-gray-700">Options:</label>
            {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mt-2">
                    <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, optionIndex, e)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
                    />
                    <button
                        type="button"
                        onClick={() => handleRemoveOption(index, optionIndex)}
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => handleAddOption(index)}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring mt-2"
            >
                Add Option
            </button>
            <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring mt-2"
            >
                Remove Question
            </button>
        </div>
    ))}

    <button
        type="button"
        onClick={addQuestion}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring mt-4"
    >
        Add Question
    </button>
    <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring mt-4"
    >
        Create Survey
    </button>
</form>

</div>
  );
};

export default FormBuilder;
