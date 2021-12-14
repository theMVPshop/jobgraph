import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PracticeChart() {
  const [jobData, getJobData] = useState([]);

  const url = "https://jobsearch-mysql.herokuapp.com/";

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get(`${url}`).then((response) => {
      const allData = response.data;
      getJobData(allData);
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={jobData.filter(
          (job) =>
            job.job_location === "dallas, tx" &&
            job.job_search_term === "web developer"
        )}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time_stamp" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="jobs" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
