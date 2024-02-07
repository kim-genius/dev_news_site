const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config()
let request = require('request');

let client_id = dotenv.parsed.client_id;
let client_secret = dotenv.parsed.client_secret;


router.get('/article',(req,res)=>{
    let api_url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURI("개발자")}&display=10&start=1&sort=sim`;
    let options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options,(error, response, body)=>{
            console.log(body)
            res.json(body)
    })
        
        
})

module.exports = router;