const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");

const app = express ();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/students", studentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server running on port $(PORT)'));

