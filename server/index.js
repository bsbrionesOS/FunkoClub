require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_PATH = path.join(__dirname, "../client/dist");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`server listing on port ${PORT}`);
});
