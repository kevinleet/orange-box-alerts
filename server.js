const express = require("express");
const Router = require("./routes/AppRouter");
const cors = require("cors");
const db = require("./db");
const scraper = require("./app/scraper");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", Router);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "client/dist")));

// Handle all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}.`)
);

scraper.run();

// things to do
// 1. add auth for api requests
// 2. forward messsages from contact us page to my email
// 3. create a new email address to send alerts from
// 4. add google analytics
