require('dotenv').config()
let express = require('express');
let app = express();


const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

// console.log("Hello World");

// app.get("/",((_req,res) =>{
//     res.send("Hello Express");
// }))
const absolutePath = __dirname + '/views/index.html'
app.get('/',(req,res)=>{
    res.sendFile(absolutePath);
})

app.get('/json', (req,res)=>{
    process.env.MESSAGE_STYLE === "uppercase"?res.json({"message":"HELLO JSON"}):res.json({"message":"HELLO JSON"})
    
})





































 module.exports = app;
