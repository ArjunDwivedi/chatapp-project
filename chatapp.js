const express = require('express');
const app = express();
const fs=require('fs');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));


app.use('/login',(req,res,next)=>{
    res.send('<form action="/" method ="POST"><input type="text" name ="Name"><button type="submit">enter your name</button></form>');
});

app.get('/',(req,res,next)=>{
        fs.readFile('filemsg.text','utf-8',(err,data)=>{
            if(err){
                console.log(err)
                data = "no chat"
            }
            res.send(`${data}<form action="/" method ="POST"><input type="text" name ="Name"><button type="submit">enter your name</button></form>`);
        });
    });
 app.post('/',(req,res,next)=>{
    const name = req.body.Name;

    fs.appendFile('filemsg.text',name,(err)=>{
        err ? console.log(err) : res.redirect('/');
 });

});


app.listen(3000);