const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/MongoDbConn");
const userRoute = require("./routers/Users");

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middelwares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/saras/user", userRoute);

app.get("/", (req, res) => {
  res.send("<h1>it's me my team saras</h1>");
  console.log("it's me my team saras");
});

const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
  console.log(`server running on ${PORT} port `.bgCyan.white);
});
