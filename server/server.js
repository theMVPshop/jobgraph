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

//****************************************** */
app.get("/", (req, res) => {
  db.query("SELECT * FROM employees21.job_results", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/results", (req, res) => {
  // Web scraping
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.indeed.com/jobs?q=dental+assistant&l=austin+tx&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68"
    );
    // "https://www.indeed.com/jobs?q=html+css+developer&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=css+developer&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=package+sorter&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=software%20developer&l=Austin%2C%20TX&vjk=e3de758baf700125" Do not work
    // "https://www.indeed.com/jobs?q=web%20developer&l=Austin%2C%20TX&vjk=f10c738a99eece92" Do not work
    // "https://www.indeed.com/jobs?q=html%20css%20developer&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68&vjk=c75169deafacb10f" Do not work
    // await page.screenshot();
    await page.screenshot({ path: "example8.png" });

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
//********************************************* */

app.get("/jobs", (req, res) => {
  // Web scraping
  (async () => {
    let what = req.body.what;
    let where = req.body.where;
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(
      `https://www.indeed.com/jobs?q=${what}&l=${where}&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68`
    );
    // `https://www.indeed.com/jobs?q=${what}&l=${where}&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68` Do not work
    // "https://www.indeed.com/jobs?q=html+css+developer&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=css+developer&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=package+sorter&l=&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68" works
    // "https://www.indeed.com/jobs?q=software%20developer&l=Austin%2C%20TX&vjk=e3de758baf700125" Do not work
    // "https://www.indeed.com/jobs?q=web%20developer&l=Austin%2C%20TX&vjk=f10c738a99eece92" Do not work
    // "https://www.indeed.com/jobs?q=html%20css%20developer&ts=1635198952737&rq=1&rsIdx=1&fromage=last&newcount=68&vjk=c75169deafacb10f" Do not work
    // await page.screenshot();
    await page.screenshot({ path: "example14.png" });

    // await page.type("#text-input-what", "Nursing");
    // // await page.type("#text-input-where", "Austin, Tx");

    // await page.click('button[type="submit"]');
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

//******************************************** */
app.get("/results", (req, res) => {
  db.query("SELECT * FROM employees21.job_results", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//your here
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
  const timeStamp = new Date();

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

// const dailySearch = () => {};

// setInterval("dailySearch()", 86400000);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
