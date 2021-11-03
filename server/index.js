const express = require("express");
const puppeteer = require("puppeteer");
const mysql = require("mysql");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(bodyParser.json());

//  MySQL Database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

//Adding data to database

//****************************************** 1 */
app.get("/", (req, res) => {
  db.query("SELECT * FROM employees21.job_results", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//********************************************* 2 */

app.get("/jobs", (req, res) => {
  // Web scraping
  (async () => {
    const location = req.body.location;
    const searchTerm = req.body.searchTerm;
    const timeStamp = new Date();

    //adding client Data into database
    db.query(
      "INSERT INTO employees21.job_search (job_location, job_search_term, time_stamp) VALUES (?,?,?)",
      [location, searchTerm, timeStamp],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://www.indeed.com/jobs?q=${searchTerm}&l=${location}&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68`
    );

    const job_count = await page.evaluate(() => {
      const elements = document.querySelector("#searchCountPages");

      return elements.innerText;
    });

    db.query(
      "INSERT INTO employees21.job_results (jobs) VALUES (?)",
      [`${job_count}`],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );

    console.log("Job count:", job_count);

    await browser.close();
  })();

  res.send(
    "Your request was submitted successfully, refer to console for results!"
  );
});

// const dailySearch = () => {};

// setInterval("dailySearch()", 86400000);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
