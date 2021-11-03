"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const home = require("./src/routes/home");

app.set("views", "./src/views");    // render 위치
app.set("view engine", "ejs"); //ejs엔진 실행


app.use(express.static(`${__dirname}/src/public`)); //기본 경로 설정


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home);

module.exports = app;
    
