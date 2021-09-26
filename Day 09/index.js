const { RSA_X931_PADDING } = require("constants");
const express = require("express")
const app = express();
const path = require('path')

// set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

/* app.use('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public/demo.json'),'download.json')
}) */

/* app.use('/',(req,res) => {
    res.download(path.join(__dirname,'public/hello.txt'),'demo.txt')
}) */

/* app.use('/',(req,res) => {
    res.render('index',{title:"Express"})
}) */

// app.use(express.static(path.join(__dirname, 'public')));

// COOKIES SET

/* app.use('/',(req,res) => {
    res.status(201).
    cookie("toke","test",{
        expire: new Date(Date.now + 8 * 3600000)
    }).
    cookie("hello","hello").
    redirect(301,'/')
}) */


app.get('/file/:name' , (req,res) => {
    // console.log(req.params.name);
    res.sendFile(path.join(__dirname,`public/${req.params.name}`),)
})

app.listen("3000", () => {
	console.log("App is listening at http://localhost:3000/");
});
