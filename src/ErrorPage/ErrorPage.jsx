import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <img src="https://i.ibb.co/gmd2Bxm/Error.png" alt="Error 404" className="w-80 h-80 mb-8" />
      <Link to="/">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
