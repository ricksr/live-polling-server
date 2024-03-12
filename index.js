//imports

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const app = express();

//All routes to be present here
const allRoutes = require("./routes/all.route");

// Middlewares

app.use(express.json());
app.use(cors());

//All routes with prefix
app.get("/", (req, res) => {
  res.status(200).send("Status 200 for API");
});

app.use("/api", allRoutes);

app.listen(port, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log(`server running on ${port}`);
});
