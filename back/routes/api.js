const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config()
const apikey = dotenv.parsed.apiKey
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(apikey);


router.get('/article',(req,res)=>{
   // To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
  
            newsapi.v2.everything({
            q: 'technology',
            from: '2024-01-05',
            to: '2024-02-01',
            language: 'en',
            sortBy: 'relevancy',
            page: 1
        }).then(response => {
            res.json(response)
        });
        
        
})

module.exports = router;