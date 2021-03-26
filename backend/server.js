const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors())
app.use(express.static(__dirname+"/uploaded"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}))


app.use("/api/v1/authen",require("./api-authen"))
app.use("/api/v1/stock",require("./api-stock"))

app.listen(8085,()=>{
    console.log("Backend is running...")
})