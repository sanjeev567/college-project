const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");

app.use(cors());

mongoose
  .connect("mongodb://localhost/stackoverflow", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb is connnected successfully..."))
  .catch((err) =>
    console.log("Mongodb not connected successfully due to, " + err)
  );

const PORT = process.env.PORT || 80;

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    // res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    res.status(403).json("no page found");
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
