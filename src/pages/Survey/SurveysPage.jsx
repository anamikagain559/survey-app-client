import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SurveysPage = () => {
    const [categories] = useState(['Health', 'Technology', 'Education', 'Environment', 'Sports']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    const axiosPublic = useAxiosPublic();

    const fetchSurveys = async ({ queryKey }) => {
        const [_, selectedCategory, sortOption] = queryKey;
        const response = await axiosPublic.get('/surveys', {
            params: {
                category: selectedCategory,
                sort: sortOption
            }
        });
        return response.data;
    };

    const {
        data: surveys = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ['surveys', selectedCategory, sortOption],
        queryFn: fetchSurveys,
        keepPreviousData: true,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto py-[100px]">
            <h1 className="text-3xl font-bold mb-8">All Surveys</h1>
            <div className="mb-4 flex justify-between items-center">
                <div>
                    <label className="mr-2">Filter by Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border rounded-md p-2"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="mr-2">Sort by:</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border rounded-md p-2"
                    >
                        <option value="">None</option>
                        <option value="votes">Vote Count</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {surveys.map(survey => (
                    <div key={survey._id} className="p-4 border rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-2">{survey.title}</h2>
                        <p className="mb-2">{survey.description}</p>
                        <p className="font-semibold">Category: {survey.category || 0}</p>
                        <p className="font-semibold">Total Votes: {survey.voteCount || 0}</p>
                        <Link to={`/surveys/${survey._id}`} className="text-blue-500">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurveysPage;


