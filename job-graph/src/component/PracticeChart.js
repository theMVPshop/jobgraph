import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Tooltip,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
} from "recharts";

let cityName;
var jobName;
var dbJobs;
var dbTimeStamp;
let allData;
var dbElement = [cityName, jobName, dbJobs, dbTimeStamp];
var dbArrayLength /*= dbElement[3].length*/;
var lineChartData = [];

export default function PracticeChart() {
  const [jobData, getJobData] = useState([]);

  const url = "https://jobsearch-mysql.herokuapp.com/";

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get(`${url}`).then((response) => {
      allData = response.data;
      getJobData(allData);
    });

      cityName = jobData.filter((job) => job.job_location === "dallas, tx");

      jobName = jobData.filter((job) => job.job_search_term === "software");

      dbJobs = jobData.filter((job) => job.jobs);

      

    /*
    for(let i = 0; i < dbJobs.length - 1; i++)
      {
        dbTimeStamp[i] = dbJobs[i].time_stamp;
      }
      
      dbElement = [cityName, jobName, dbJobs, dbTimeStamp];
      dbArrayLength = dbElement[3].length;
      */
      for (var i = 0; i < dbArrayLength; i++) {
        /*
        lineChartData.push(
          {
            //timeStamp: dbTimeStamp[i],
            jobs: dbJobs[i],
          }
        );
        */
     }
  };

  //#region 

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
//#endregion



  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
         width={500}
         height={400}
        data = {lineChartData}/*{jobData.filter(
          (job) =>
            job.job_location === "houston, tx" &&
            job.job_search_term === "web developer"
        )}*/
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
        <Legend />
        <Line type="monotone" dataKey="jobs" stroke="#1997b5" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
