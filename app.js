const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { PORT = 6060 } = process.env;

const messagesRouter = require("./routes/api/messages");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/messages", messagesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log("Server is running on port 6060");
});

module.exports = app;
