const express = require("express");
const puppeteer = require("puppeteer");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

//  MySQL Database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.get("/", (req, res) => {
  // Web scraping
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.indeed.com/jobs?q=html+css+developer&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68"
    );
    await page.screenshot();

    // Get a "snapshot" of the page then search for element.
    const job_count = await page.evaluate(() => {
      const elements = document.querySelector("#searchCountPages");

      return elements.innerText;
    });

    console.log("Job count:", job_count);

    await browser.close();
  })();

  res.send(
    "Your request was submitted successfully, refer to console for results!"
  );
});

app.get("/results", (req, res) => {
  db.query("SELECT * FROM employees21.job_results", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/searchinfo", (req, res) => {
  db.query("SELECT * FROM employees21.job_search", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/search", (req, res) => {
  const location = req.body.location;
  const searchTerm = req.body.searchTerm;
  const timeStamp = req.body.timeStamp;

  db.query(
    "INSERT INTO employees21.job_search (job_location, job_search_term, time_stamp) VALUES (?,?,?)",
    [location, searchTerm, timeStamp],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Your search was added!");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
