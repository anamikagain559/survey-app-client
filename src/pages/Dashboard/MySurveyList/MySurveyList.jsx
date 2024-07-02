import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySurveyList = () => {
  const { user } = useAuth();
  const userEmail = user.email ? user.email : null;
  const axiosSecure = useAxiosSecure();

  const {
    data: surveys = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["surveys", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor/surveys/${userEmail}`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto ">
      <table className="table-auto w-full min-w-full lg:min-w-[600px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 lg:px-4 py-2 text-left">#</th>
            <th className="px-2 lg:px-4 py-2 text-left">Title</th>
            <th className="px-2 lg:px-4 py-2 text-left">Description</th>
            <th className="px-2 lg:px-4 py-2 text-left">Category</th>
            <th className="px-2 lg:px-4 py-2 text-left">Deadline</th>
            <th className="px-2 lg:px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey, index) => (
            <tr key={survey._id} className="hover:bg-gray-100">
              <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
              <td className="border px-2 lg:px-4 py-2">{survey.title}</td>
              <td className="border px-2 lg:px-4 py-2">{survey.description}</td>
              <td className="border px-2 lg:px-4 py-2">{survey.category}</td>
              <td className="border px-2 lg:px-4 py-2">{survey.deadline}</td>
              <td className="border px-2 lg:px-4 py-2 flex flex-col lg:flex-row lg:space-x-2">
                <Link to={`/dashboard/surveyor/surveys/${survey._id}`}>
                  <button className="btn btn-primary mb-2 lg:mb-0">
                    Details
                  </button>
                </Link>
                <Link to={`/dashboard/editSurvey/${survey._id}`}>
                  <button className="btn btn-secondary">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySurveyList;
