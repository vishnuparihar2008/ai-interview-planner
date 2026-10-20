const express = require("express");

const app = express();

app.use(express.json());

// Require all the Routes here
const authRouter = require("./routes/auth.routes");

// Using all the Routes here
app.use("/api/auth", authRouter);

module.exports = app;
