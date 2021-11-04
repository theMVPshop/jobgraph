import React from 'react'
import ChartView from './chartView';
import { Line } from 'react-chartjs-2';


function GraphChart() {

    //example db array
    const dataFriend1 = [10, 30, 40, 50, 60, 50, 40, 30, 30, 30, 10, 60, 50];
    const dataFriend2 = [10, 30, 40, 50, 60, 50, 40, 30, 30, 30, 10, 60, 50];
    const dataFriend3 = [10, 30, 40, 50, 60, 50, 40, 30, 30, 30, 10, 60, 50];

    //add extra data sets for all locations
    const data = [];
    const data2 = [];
    const data3 = [];

    //How long it takes for the data to reach the other side
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const ctx = document.getElementById('chart').getContext('2d');

    //amount of time in (unit of time here). Higher amounts give more data to increase amount of spikes
    //time to display should be the amount of time stamps are available
    var timeToDisplay = 100;
    var startingAmount = 0;
    //chart data
    const dataStream = {
        //this is for the little square that pops up when hovering over lines
        datasets: [{
            borderColor: 'red',
            borderWidth: 1,
            radius: 0,
            data: data,
        },
        {
            borderColor: 'blue',
            borderWidth: 1,
            radius: 0,
            data: data2,
        },
        {
            borderColor: 'purple',
            borderWidth: 1,
            radius: 0,
            data: data3,
        }/*, In case you forget how to add more data
  {
    borderColor: 'blue',
    borderWidth: 1,
    radius: 0,
    data: data2,
  }*/]
    };

    const config = {
        type: 'line',
        data: dataStream,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            animation: {
                x: {
                    type: 'number',
                    easing: 'linear',
                    duration: delayBetweenPoints,
                    from: NaN, // the point is initially skipped
                    delay(ctx) {
                        if (ctx.type !== 'data' || ctx.xStarted) {
                            return 0;
                        }
                        ctx.xStarted = true;
                        return ctx.index * delayBetweenPoints;
                    }
                },
                y: {
                    type: 'number',
                    easing: 'linear',
                    duration: delayBetweenPoints,
                    from: previousY,
                    delay(ctx) {
                        if (ctx.type !== 'data' || ctx.yStarted) {
                            return 0;
                        }
                        ctx.yStarted = true;
                        return ctx.index * delayBetweenPoints;
                    }
                }
            },
            interaction: {
                intersect: false
            },
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    type: 'linear'
                }
            }
        }
    };

    //This creates the chart
    const myChart = new Chart(
        document.getElementById('chart'),
        config
    );

    //may have to put this somewhere else
    for (let i = 0; i < timeToDisplay; i++) {
        data.push({ x: i, y: dataFriend1[i] });
        data2.push({ x: i, y: dataFriend2[i] });
        data3.push({ x: i, y: dataFriend3[i] });
    }

    
    return (
        data, data2, data3,
         dataFriend1, dataFriend2, dataFriend3,
         totalDuration, delayBetweenPoints, previousY,
         ctx, timeToDisplay, startingAmount, dataStream,
         config, myChart
    )
      
};

export default GraphChart;