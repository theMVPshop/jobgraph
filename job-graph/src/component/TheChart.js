import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//testing data
var testAverageSal = [50.000, 45.000,60.000,55.000,45.000,50.000,45.000,50.000,50.000,60.000,45.000];
var testSavedJobsAmount = [100, 85, 110, 90, 95, 100, 105, 90, 80, 110];
//x axis time stamp references
var testSavedDates = ["01-15-2021","02-15-2021","03-15-2021","04-15-2021","05-15-2021","06-15-2021",
"07-15-2021","08-15-2021","09-15-2021","10-15-2021"];

var testingData = 50;

const data = [
  {
    name: testSavedDates[0],
    test: testingData,
    jobs: testSavedJobsAmount[0],
    salaries:testAverageSal[0]
  },
  {
    name: testSavedDates[1],
    test: testingData,
    jobs: testSavedJobsAmount[1],
    salaries:testAverageSal[1]
  },
  {
    name: testSavedDates[2],
    test: testingData,
    jobs: testSavedJobsAmount[2],
    salaries:testAverageSal[2]
  },
  {
    name: testSavedDates[3],
    test: testingData,
    jobs: testSavedJobsAmount[3],
    salaries:testAverageSal[3]
  },
  {
    name: testSavedDates[4],
    test: testingData,
    jobs: testSavedJobsAmount[4],
    salaries:testAverageSal[4]
  },
  {
    name: testSavedDates[5],
    test: testingData,
    jobs: testSavedJobsAmount[5],
    salaries:testAverageSal[5]
  },
  {
    name: testSavedDates[6],
    test: testingData,
    jobs: testSavedJobsAmount[6],
    salaries:testAverageSal[6]
  },
  {
    name: testSavedDates[7],
    test: testingData,
    jobs: testSavedJobsAmount[7],
    salaries:testAverageSal[7]
  },
  {
    name: testSavedDates[8],
    test: testingData,
    jobs: testSavedJobsAmount[8],
    salaries:testAverageSal[8]
  },
  {
    name: testSavedDates[9],
    test: testingData,
    jobs: testSavedJobsAmount[9],
    salaries:testAverageSal[9]
  },
];

export default class LineGraph extends PureComponent {

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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="jobs" stroke="#1997b5" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="salaries" stroke="#3444d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="test" stroke="#8004d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
