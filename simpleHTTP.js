const express = require("express");
const app = express();
const port = 5000;
const http = require ("http");
const bodyParser = require("body-parser");


app.get("/get", function (req,res){
  res.send("Webcome to you ")
});


app.post("/update", function (req,res){
  res.send("update something here...")
});

app.put("/put", function (req,res){
  res.send("add something here ...")
});


app.delete("/delete", function (req,res){
  res.send("delete from here  ...")
});


app.listen(port, function (req, res){
  console.log(`server is running at port no ,${port}`);
});