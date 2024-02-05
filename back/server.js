
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiRouter = require("./routes/api");
app.set('port', process.env.PORT || 3095); 
app.use(bodyParser.urlencoded({extended : true})) 
app.use(express.static(__dirname + "/public")) 
app.use(express.json()) 
app.use(cors()) 


app.use("/api", apiRouter);

app.listen(app.get('port'),()=>{
        console.log(app.get('port')+'번 포트에서 대기중...')
})