const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config()
const apikey = dotenv.parsed.apiKey
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(apikey);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  q: 'bitcoin',
  category: 'business',
  language: 'en'
}).then(response => {
  console.log(response);
})



module.exports = router;