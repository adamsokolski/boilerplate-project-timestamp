// server.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const myApi = (req, res) => {
  let milliseconds = Date.now();

  if (req.params.date) {
    const regex = /^-\d+$|^\d+$/g;
    const onlyDigits = regex.test(req.params.date);

    if (onlyDigits) {
      milliseconds = parseInt(req.params.date);
    } else {
      const userDate = new Date(req.params.date);
      milliseconds = userDate.getTime();
    }
  }

  const dateObject = new Date(milliseconds);
  const dateString = dateObject.toUTCString();
  const jsonData =
    dateString !== "Invalid Date"
      ? {
          unix: milliseconds,
          utc: dateObject.toUTCString(),
        }
      : { error: "Invalid Date" };

  res.json(jsonData);
};

// your first API endpoint...
app.get("/api/:date", function (req, res) {
  myApi(req, res);
});

app.get("/api", (req, res) => {
  myApi(req, res);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
