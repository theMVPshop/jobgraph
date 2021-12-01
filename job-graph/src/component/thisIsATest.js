import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

function LineChartTwo() {

  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  let title = [];
  let id = [];
  useEffect(() => {

    axios.get("https://jobsearch-mysql.herokuapp.com/").then(res => {
      const ipl = res.data;
      setPosts(ipl);

      ipl.forEach(record => {
        title.push(record.title);
        id.push(record.id);
      });

      setData({
        Data: {
          labels: title,
          datasets: [
            {
              label: title,
              data: id,
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#1997b5"
              ]
            }
          ]
        }
      });
    });
  });

  return (
    <div>
      <Line data={data.Data} />
    </div>
  );
}

export default LineChartTwo;