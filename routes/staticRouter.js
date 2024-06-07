const express = require("express");
const URL = require("../models/url");
const homeRoute = express.Router();

homeRoute.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  console.log("Hemlo from home page");
  return res.render("home-page", { urls: allUrls });
});

module.exports = { homeRoute };
