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
let XAxi;
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
      cityNameFilter = "dallas, tx";
      jobNameFilter = "web developer";

      //filter our data to the correct location and job type
      this.FilterData();
      //add filtered data to data variable to graph
      this.AddData();
    });
  }

  FilterData(){
    /*Filter
    1. City
    2. Job name
    3. Jobs
    4. Time stamps
    */


    cityName = this.state.jobInfo.filter((job) => job.job_location === cityNameFilter);
    console.log("city name");
    console.log(cityName);

    jobName = cityName.filter((job) => job.job_search_term === jobNameFilter);
    console.log("job name");
    console.log(jobName);
    console.log("jobName length: " + jobName.length);

    //filter for only our jobName jobs
    for(let i = 0; i < jobName.length; i++)
    {
      //change strings into numbers
      dbJobs[i] = jobName[i].jobs.replace(/,/g, '');
      
    }

    //time stamps
    for(let i = 0; i < jobName.length; i++)
    {
      dbTimeStamp[i] = jobName[i].time_stamp.slice(0, 10);
    }

    dbElement = [cityName, jobName, dbJobs, dbTimeStamp];

    console.log("jobs:");
    console.log(dbJobs);
    console.log("times:");
    console.log(dbTimeStamp);
  }

  AddData(){

    dbArrayLength = dbElement[2].length;

    //XAxi = dbArrayLength;
    //YAxi = dbArrayLength;

      for (var i = 0; i < dbArrayLength; i++) {
        lineChartData.push(
          {
            //take only the date from our timestamps
            timeStamp: dbTimeStamp[i],
            //print the job amounts as numbers removing the comma
            //Jobs: parseFloat(dbJobs[i].replace(/,/g, '')),
            Jobs: dbJobs[i],
          },
        );
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

          //                                                                      *READ ME
          //this.state.jobInfo prints vertical lines
          //this.state.lineChartData should print the data points, but draws a blank
          //this.state must be used or else an error will occur
          data={this.state.lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={XAxi} />
          <YAxis dataKey={YAxi} />
          <Tooltip />
          
          <Line type="monotone" dataKey="Jobs" stroke="#1997b5" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      
    );
  }
}
