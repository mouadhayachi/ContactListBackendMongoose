const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

// connect to database
mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("The database is connected!"))
  .catch((err) => console.error(err));

// API Router
app.use("/", require("./routes/contact"));

// Run Server
app.listen(4000, (err) => {
  err
    ? console.log("Server Failed!")
    : console.log("Server is running on port 4000 !");
});
