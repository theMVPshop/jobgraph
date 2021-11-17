import React, { PureComponent } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

var cityName;
var jobName;
var dbJobs;
var dbTimeStamp;

//Link db to the corresponding areas
//#region test db

cityName = "Austin";
jobName = "Programmer";
dbJobs = [
  30, 25, 35, 38, 45, 50, 55, 80, 100, 90, 86, 80, 70, 75, 60, 70, 80, 90, 110,
  125, 150, 130, 150, 203, 232, 250, 255, 101, 107, 160, 200, 210, 246, 247,
  264, 255,
];
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
var data = [];

//for loop for an iteration of the "length of elements" in our array
for (var i = 0; i < dbArrayLength; i++) {
  data.push({
    timeStamp: dbTimeStamp,
    Jobs: dbJobs[i],
  });
}

export default class LineGraph extends PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:4001/`).then((res) => {
      const jobInfo = res.data;
      this.setState({ jobInfo });
      console.log(jobInfo);
    });
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timeStamp" />
          <YAxis name="hi" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Jobs"
            stroke="#1997b5"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
