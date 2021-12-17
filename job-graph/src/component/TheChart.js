import React, { PureComponent } from "react";
import axios from "axios";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

let cityName;
var jobName;
var dbJobs;
var dbTimeStamp;

//Link db to the corresponding areas
//#region test db

// cityName = this.state.jobInfo;

// console.log(cityName);
// jobName = "Software";
// cityName = this.state.jobInfo.filter(
//   (city) => city.job_location === "dallas, tx"
// );

// jobName = this.state.jobInfo.filter(
//   (jobTitle) => jobTitle.job_search_term === "software"
// );

// dbJobs = [
//   30, 25, 35, 38, 45, 50, 55, 80, 100, 90, 86, 80, 70, 75, 60, 70, 80, 90, 110,
//   125, 150, 130, 150, 203, 232, 250, 255, 101, 107, 160, 200, 210, 246, 247,
//   264, 255,
// ];
let lineChartData = [];
dbTimeStamp = [
  "01-15-2021",
  "02-15-2021",
  "03-15-2021",
  "04-15-2021",
  "05-15-2021",
  "06-15-2021",
  "07-15-2021",
  "08-15-2021",
  "09-15-2021",
  "10-15-2021, 11-15-2021",
  "12-15-2021",
  "01-15-2022",
  "02-15-2022",
  "03-15-2022",
  "04-15-2022",
  "05-15-2022",
  "06-15-2022",
  "07-15-2022",
  "08-15-2022",
  "09-15-2022",
  "10-15-2022, 11-15-2022",
  "12-15-2022",
  "01-15-2023",
  "02-15-2023",
  "03-15-2023",
  "04-15-2023",
  "05-15-2023",
  "06-15-2023",
  "07-15-2023",
  "08-15-2023",
  "09-15-2023",
  "10-15-2023, 11-15-2023",
  "12-15-2023",
];
//#endregion

//putting all the db elements into one array
var dbElement = [cityName, jobName, dbJobs, dbTimeStamp];

//amount of index's we are handling (Will be the amount of timestamps)
var dbArrayLength = dbElement[3].length;
//this data will be passed into <LineChart> and presented on screen
/*
var dataToDisplay = [
  {
    Jobs: 2000,
  },
  {
    Jobs: 3000,
  },
  {
    Jobs: 2000,
  },
  {
    Jobs: 3000,
  },
];
*/
//for loop for an iteration of the "length of elements" in our array
// for (var i = 0; i < dbArrayLength; i++) {
//   data.push({
//     timeStamp: dbTimeStamp,
//     Jobs: dbJobs[i],
//   });
// }

//#region

export default class LineGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobInfo: [],
    };
  }

  async componentDidMount() {
    console.log("Accessing DidMount");
    var returnThis = await this.GetData();
    //returnThis=JSON.parse(returnThis);
    this.setState(returnThis);
  }

  GetData() {
    console.log("Accessing GetData");
    axios.get("https://jobsearch-mysql.herokuapp.com/").then((res) => {
      const jobInfo = res.data;
      this.setState({ jobInfo });

      cityName = jobInfo.filter((job) => job.job_location === "dallas, tx");

      jobName = jobInfo.filter((job) => job.job_search_term === "software");

      dbJobs = jobInfo.filter((job) => job.jobs);
      console.log("jobs:");
      console.log(dbJobs);

      for (let i = 0; i < dbJobs.length - 1; i++) {
        dbTimeStamp[i] = dbJobs[i].time_stamp;
      }

      dbElement = [cityName, jobName, dbJobs, dbTimeStamp];
      dbArrayLength = dbElement[3].length;

      for (var i = 0; i < dbArrayLength; i++) {
        lineChartData.push({
          timeStamp: dbTimeStamp[i],
          jobs: dbJobs[i].jobs,
        });
      }
      console.log("lineChartData");
      console.log(lineChartData);
    });
  }

  render() {
    console.log("Accessing render");
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          label="Job list"
          width={500}
          height={300}
          data={this.state.jobInfo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.jobInfo.jobs} />
          <YAxis name="tbd" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey={this.state.jobInfo.time_stamp}
            stroke="#1997b5"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
