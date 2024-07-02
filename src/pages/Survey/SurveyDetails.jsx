import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Comment from "./Comment";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SurveyDetails = () => {
  const [reason, setReason] = useState("");
  const { user } = useContext(AuthContext);
  const { surveyId } = useParams();
  const [commentText, setCommentText] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const userEmail = user ? user.email : null;
  const userName = user ? user.displayName : null;

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: userData = {}, isPending: roleLoading } = useQuery({
    queryKey: [userEmail, "userData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${userEmail}`);
      console.log(res.data);
      return res.data;
    },
  });

  const {
    data: survey = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["survey", surveyId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${surveyId}`);
      return res.data;
    },
  });

  const {
    data: voteCounts,
    isLoading: isVoteLoading,
    error: voteError,
  } = useQuery({
    queryKey: ["voteCounts", surveyId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${surveyId}/voteCounts`);
      return res.data;
    },
  });

  const {
    data: comments,
    isLoading: isCommentLoading,
    error: commentError,
    refetch: commentRefetch,
  } = useQuery({
    queryKey: ["comments", surveyId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/${surveyId}`);
      return res.data;
    },
  });

  const handleReport = async () => {
    try {
      if (!user) {
        Swal.fire({
          title: "Login Required",
          text: "Please login first to Report the survey.",
          icon: "info",
          confirmButtonText: "OK",
        });
        return;
      }
      const response = await axiosSecure.post(`/report/${surveyId}`, {
        title: survey.title,
        category: survey.category,
        description: survey.description,
        userEmail: userEmail,
        reason,
      });
      if (
        response.status === 200 &&
        response.data.message === "You have already Reported"
      ) {
        Swal.fire({
          title: "Already Reported!",
          text: "You have already Reported This Survey",
          icon: "info",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: "You have successfully Reported This Survey",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("An error occurred while reporting the survey", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!user) {
        Swal.fire({
          title: "Login Required",
          text: "Please login first to vote.",
          icon: "info",
          confirmButtonText: "OK",
        });
        return;
      }
      const response = await axiosSecure.post(`/surveys/${surveyId}/vote`, {
        userEmail,
        userName,
        responses: [{ option: selectedOption }],
      });
      if (
        response.status === 200 &&
        response.data.message === "You have already Voted"
      ) {
        Swal.fire({
          title: "Already Voted!",
          text: "You have already voted on this survey",
          icon: "info",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: "You have successfully voted on this survey",
          icon: "success",
          confirmButtonText: "OK",
        });
        setVoteSubmitted(true);
        refetch();
      }
    } catch (error) {
      console.error("Error submitting vote", error);
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "Please log in to post a comment.",
      });
      return;
    }

    axiosPublic
      .post(`/comment/${surveyId}`, {
        text: commentText,
        title: survey.title,
        category: survey.category,
        description: survey.description,
        userEmail: userEmail,
        userName: user.displayName ? user.displayName : null,
        userProfilePicture: user.photoURL ? user.photoURL : null,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Comment posted!",
          text: "Your comment has been posted successfully.",
        });
        setCommentText("");
        commentRefetch();
      })
      .catch((error) => {
        console.error("Error posting comment", error);
      });
  };

  const RADIAN = Math.PI / 180;
  const currentDate = new Date();

  if (isLoading || roleLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading survey data</div>;

  const formattedData = voteCounts?.map((option) => ({
    name: `Option ${option.option}`,
    votes: option.count,
  }));

  const formattedData2 = voteCounts?.map((option) => ({
    name: `Option ${option.option}`,
    value: option.count,
  }));

  const surveyDeadline = new Date(survey.deadline);
  const showResults = currentDate > surveyDeadline || voteSubmitted;

  //   // Custom label render function
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="pt-[100px]">
      <div>
        <h1 className="text-xl font-semibold">Survey Title :{survey.title}</h1>
        <p className="text-xl font-semibold">
          Survey Description :{survey.description}
        </p>
        <p className="text-xl font-semibold">Deadline : {survey.deadline}</p>
        <p className="text-xl font-semibold">Category : {survey.category}</p>
        <div>
          {survey?.options?.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name="survey-option"
                  value={optionIndex}
                  className="text-xl font-bold"
                  onChange={() => setSelectedOption(optionIndex)}
                  disabled={voteSubmitted}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={voteSubmitted || selectedOption === null}
          className="btn btn-success"
        >
          Submit Vote
        </button>

        <h3 className="text-2xl font-bold mt-4">Report Survey</h3>
        <textarea
          className="textarea textarea-error p-5 my-4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for reporting this survey"
        ></textarea>
        <br />
        <button onClick={handleReport} className="btn btn-error mb-3">
          Report
        </button>
      </div>

      {userData?.role === "pro-user" ? (
        <div>
          <h3>User Comments</h3>
          <form className="mb-6" onSubmit={handleCommentSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </form>
          {comments?.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-bold mt-4">
          Become a Pro User to View and Post Comments!
        </h3>
      )}

      {showResults && (
        <div>
          <h2 className="text-2xl font-bold my-4">Survey Results</h2>

          <progress
            className="progress progress-warning w-56"
            value={survey.voteCount}
            max="200"
          ></progress>
          {voteCounts?.length > 0 ? (
            voteCounts?.map((option) => (
              <div key={option.option} className="text-2xl font-semibold my-5">
                Option {option.option} - Vote Count: {option.count}
              </div>
            ))
          ) : (
            <div>No votes yet.</div>
          )}

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={formattedData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="votes"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                data={formattedData2}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {formattedData2?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS?.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>{" "}
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default SurveyDetails;
