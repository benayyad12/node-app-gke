const express = require("express");
const app = express();


app.get("/",(req,res)=>{
  console.log("Server is up and running")
})

app.listen(80,()=>{
  console.log("Server is up")
})