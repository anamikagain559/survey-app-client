import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllSurveyResponses = () => {
  const axiosSecure = useAxiosSecure();


  const {
    data: votes = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["allSurveys"],
    queryFn: async () => {
      const res = await axiosSecure.get('/allSurveys/responses');
      return res.data;
    },
  });

  return (
    <div><h1>Total Votes: {votes.length}</h1>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>User Email</th>
          <th>User Name</th>
          <th>Responses</th>
        </tr>
      </thead>
      <tbody>
        {votes.map((vote, index) => (
          <tr key={vote._id} className="hover">
            <th>{index + 1}</th>
            <td>{vote.userEmail}</td>
            <td>{vote.userName}</td>
            <td>
              {vote?.responses?.map((response, i) => (
                <div key={i}>
                  {Object.entries(response).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value === 0 ? 'Yes' : value === 1 ? 'No' : value}
                    </div>
                  ))}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table></div>
  )
}

export default AllSurveyResponses