const express = require("express");
const path = require("path");
const { connectMongoDB } = require("./connection");
const { generateRoute, redirectRoute } = require("./routes/url");
const { homeRoute } = require("./routes/staticRouter");
const app = express();
const PORT = 8001;

connectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("stylesheets"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", generateRoute);
app.use("/short", redirectRoute);
app.use("/", homeRoute);

app.listen(PORT, () => console.log("Hemlo from server at PORT :", PORT));
