
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

PORT = process.env.PORT || 5000;
MONGODB_URL = process.env.MONGODB_URL 


mongoose.connect(MONGODB_URL);

app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} `);
});
