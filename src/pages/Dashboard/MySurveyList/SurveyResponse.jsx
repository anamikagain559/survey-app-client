import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SurveyResponse = () => {
  const { id } = useParams();
  const [view, setView] = useState("table");
  const axiosPublic = useAxiosPublic();
  const {
    data: votes = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["surveys", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Survey ID is required");
      }
      const res = await axiosPublic.get(`/vote/${id}`);
      return res.data;
    },
  });
  const {
    data: voteCounts,
    isLoading: isLoading,
    error: voteError,
  } = useQuery({
    queryKey: ["voteCounts", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${id}/voteCounts`);
      return res.data;
    },
  });

  const RADIAN = Math.PI / 180;
  const currentDate = new Date();

  if (isLoading) return <div>Loading...</div>;

  const formattedData = voteCounts?.map((option) => ({
    name: `Option ${option.option}`,
    votes: option.count,
  }));

  const formattedData2 = voteCounts?.map((option) => ({
    name: `Option ${option.option}`,
    value: option.count,
  }));

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
    <div className="overflow-x-auto">
      <button
        onClick={() => setView(view === "table" ? "chart" : "table")}
        className="btn btn-accent"
      >
        Toggle to {view === "table" ? "Chart" : "Table"} View
      </button>

      {view === "table" ? (
        <>
          <h1>Total Votes: {votes.length}</h1>
          <table className="table-auto w-full min-w-full lg:min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 lg:px-4 py-2 text-left">#</th>
                <th className="px-2 lg:px-4 py-2 text-left">User Email</th>
                <th className="px-2 lg:px-4 py-2 text-left">User Name</th>
                <th className="px-2 lg:px-4 py-2 text-left">Responses</th>
              </tr>
            </thead>
            <tbody>
              {votes.map((vote, index) => (
                <tr key={vote._id} className="hover:bg-gray-100">
                  <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
                  <td className="border px-2 lg:px-4 py-2">{vote.userEmail}</td>
                  <td className="border px-2 lg:px-4 py-2">{vote.userName}</td>
                  <td className="border px-2 lg:px-4 py-2">
                    {vote?.responses?.map((response, i) => (
                      <div key={i} className="mb-2">
                        {Object.entries(response).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <strong className="mr-1">{key}:</strong>
                            <span>
                              {value === 0 ? "Yes" : value === 1 ? "No" : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div>
          <div>
            <h2 className="text-2xl font-bold">Survey Results</h2>

            {voteCounts?.length > 0 ? (
              voteCounts?.map((option) => (
                <div key={option.option} className="text-2xl font-semibold">
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
        </div>
      )}
    </div>
  );
};

export default SurveyResponse;
