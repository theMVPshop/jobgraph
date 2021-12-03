import React, { Component } from 'react';
import Chart from './thisIsATest';
import axios from 'axios';

class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // axios calls here
    axios.get("https://jobsearch-mysql.herokuapp.com/").then((res) => {
    const jobInfo = res.data;
    this.setState(jobInfo)
    this.setState({
      chartData:{
        labels: this.jobInfo.job_location,
        datasets:[
          {
            label:'Number Of Jobs',
            data:this.jobInfo.jobs,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location={this.state.chartData.job_locationjob_location} legendPosition="bottom"/>
      </div>
    );
  }
}

export default Graph;