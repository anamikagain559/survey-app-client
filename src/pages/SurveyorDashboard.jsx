// src/pages/SurveyorDashboard.js
import React from 'react';
import SurveysTable from '../components/SurveysTable/SurveysTable';


const SurveyorDashboard = () => {
    const userId = 'your-logged-in-user-id'; // Replace with the actual logged-in user's ID

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Surveyor Dashboard</h1>
            <SurveysTable userId={userId} />
        </div>
    );
};

export default SurveyorDashboard;
