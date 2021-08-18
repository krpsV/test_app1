const express=require('express');
const app=express();
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('top.ejs');
})
app.get('/index',(req,res)=>{
    res.render('index.ejs');
})
let count=0;
app.get('/app1',(req,res)=>{
    res.render('app1.ejs');
    console.log(req);
    console.log("count:"+count++);
})
app.listen(3000);