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

  // const chart = () => {
  //   let timeStamp = [];
  //   let jobs = [];
  //   axios
  //     .get(`${url}`)
  //     .then(res => {
  //       console.log(res);
  //       for (const dataObj of res.data.data) {
  //         timeStamp.push(parseInt(dataObj.time_stamp));
  //         jobs.push(parseInt(dataObj.jobs));
  //       }

  //   const data = [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        // width={500}
        // height={400}
        data={jobData.filter(
          (job) =>
            job.job_location === "houston, tx" &&
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
