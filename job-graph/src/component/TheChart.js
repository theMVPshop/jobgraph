import React, { PureComponent } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

//filter variables
let cityNameFilter;
let jobNameFilter;

//data variables
let cityName;
let jobName;
let dbJobs = [];
let dbTimeStamp = [];
let lineChartData = [];

//graph variables
let YAxi;
var dbElement = [cityName, jobName, dbJobs, dbTimeStamp];
var dbArrayLength;

export default class LineGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobInfo: [],
    };
  }

  async componentDidMount() {
    var returnThis = await this.GetData();
    //returnThis=JSON.parse(returnThis);
    this.setState(returnThis);
  }

  //Fetch the data we need, according to the search terms, job type, and add them to state for further use
  GetData() {
    //console.log("Accessing GetData");
    axios.get("https://jobsearch-mysql.herokuapp.com/").then((res) => {
      const jobInfo = res.data;
      this.setState({ jobInfo });

      //testing assign filter input
      /*city options: "houston, tx", "san antonio, tx", "dallas, tx", "austin, tx",
      "fort worth, tx", "arlington, tx", "plano, tx", "irving, tx", "garland, tx", "frisco, tx", "mckinney, tx" */
      /*job options: "dental assistant", "medical assistant", "web developer", "software engineer"*/

      // cityNameFilter = this.props.jobLocation;
      // jobNameFilter = this.props.jobTitle;

      cityNameFilter = `${this.props.jobLocation}`;
      jobNameFilter = `${this.props.jobTitle}`;

      //filter our data to the correct location and job type
      this.FilterData();
      //add filtered data to data variable to graph
      this.AddData();
    });
  }

  addJobInfo() {}

  FilterData() {
    /*Filter
    1. City
    2. Job name
    3. Jobs
    4. Time stamps
    */

    cityName = this.state.jobInfo.filter(
      (job) => job.job_location === cityNameFilter
    );
    console.log("city name");
    console.log(cityName);

    jobName = cityName.filter((job) => job.job_search_term === jobNameFilter);
    console.log("job name");
    console.log(jobName);
    console.log("jobName length: " + jobName.length);

    //filter for only our jobName jobs
    for (let i = 0; i < jobName.length; i++) {
      //change strings into numbers
      dbJobs[i] = jobName[i].jobs.replace(/,/g, "");
    }

    //time stamps
    for (let i = 0; i < jobName.length; i++) {
      dbTimeStamp[i] = jobName[i].time_stamp.slice(0, 10);
    }

    dbElement = [cityName, jobName, dbJobs, dbTimeStamp];

    console.log("jobs:");
    console.log(dbJobs);
    console.log("times:");
    console.log(dbTimeStamp);
  }

  AddData() {
    dbArrayLength = dbElement[2].length;

    for (var i = 0; i < dbArrayLength; i++) {
      lineChartData.push({
        timeStamp: dbTimeStamp[i],

        Jobs: dbJobs[i],
      });
    }

    //set our data to state for further use
    this.setState({ lineChartData });

    console.log("lineChartData");
    console.log(lineChartData);
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          label="Job list"
          width={500}
          height={300}
          data={this.state.lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timeStamp">
            <Label
              value="Time Stamps"
              offset={0}
              position="bottom"
              style={{
                textAnchor: "middle",
                fontSize: "140%",
                fill: "rgba(0, 0, 0, 0.87)",
              }}
            />
          </XAxis>

          <YAxis dataKey={YAxi}>
            <Label
              value="Jobs"
              offset={8}
              position="left"
              style={{
                textAnchor: "middle",
                fontSize: "120%",
                fill: "rgba(0, 0, 0, 0.87)",
              }}
            />
          </YAxis>
          <Tooltip />

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
