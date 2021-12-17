const express = require("express");
const puppeteer = require("puppeteer");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
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
  db.query(
    "SELECT idjob_search, job_location, job_search_term, time_stamp, jobs FROM employees21.jobsearch, employees21.jobresults  WHERE idjob_results = idjob_search",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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
      "INSERT INTO employees21.jobsearch (job_location, job_search_term, time_stamp) VALUES (?,?,?)",
      [location, searchTerm, timeStamp],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://www.indeed.com/jobs?q=${searchTerm}&l=${location}&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68`
    );

    const job_count = await page.evaluate(() => {
      const elements = document.querySelector("#searchCountPages");
      const innerElements = elements.innerText.split(" ");
      const jobAmount = innerElements[3];

      return jobAmount;
    });

    db.query(
      "INSERT INTO employees21.jobresults (jobs) VALUES (?)",
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

//********************************************* 3 */

app.get("/auto", (req, res) => {
  const cityNameArr = [
    "houston, tx",
    "san antonio, tx",
    "dallas, tx",
    "austin, tx",
    "fort worth, tx",
    "arlington, tx",
    "plano, tx",
    "irving, tx",
    "garland, tx",
    "frisco, tx",
    "mckinney, tx",
    "grand prairie, tx",
  ];

  const jobTitleArr = [
    "dental assistant",
    "medical assistant",
    "web developer",
    "software engineer",
  ];

  // Loops through the array, grab the data, and stores each into the database

  (async () => {
    for (const city of cityNameArr) {
      for (const jobTitle of jobTitleArr) {
        // add function for puppeteer

        const location = city;
        const searchTerm = jobTitle;
        const timeStamp = new Date();

        //adding client Data into database
        db.query(
          "INSERT INTO employees21.jobsearch (job_location, job_search_term, time_stamp) VALUES (?,?,?)",
          [location, searchTerm, timeStamp],
          (err, result) => {
            if (err) {
              console.log(err);
            }
          }
        );

        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"],
        });
        const page = await browser.newPage();
        await page.goto(
          `https://www.indeed.com/jobs?q=${searchTerm}&l=${location}&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68`,
          { waitUntil: "load", timeout: 0 }
        );
        const job_count = await page.evaluate(() => {
          const elements = document.querySelector("#searchCountPages");
          const innerElements = elements.innerText.split(" ");
          const jobAmount = innerElements[3];

          return jobAmount;
        });

        db.query(
          "INSERT INTO employees21.jobresults (jobs) VALUES (?)",
          [`${job_count}`],
          (err, result) => {
            if (err) {
              console.log(err);
            }
          }
        );

        // console.log("Job count:", city + " " + jobTitle + " " + job_count);

        await browser.close();
      }
    }
  })();
});

// *********************************

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
