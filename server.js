const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')
const port = process.env.port || 3000 ;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/sub',(req,res)=>{
    fs.readFile(path.join(__dirname ,'/index.html'),(err,data)=>{
        res.send(data);
    })
})
app.get('*',(req,res)=>{
    res.status(504).send("404 Page Is render and page not found")
})

app.listen(port,(err)=>{
    if(err)
        console.log('Error: Page failed to render', err);
    else
        console.log(`Port is listening on ${port}`);
})
