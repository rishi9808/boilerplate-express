require('dotenv').config()
let express = require('express');
let app = express();


const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use((req,res,next)=>{
    console.log(req.method+" "+req.path+" - "+req.ip);
})

// console.log("Hello World");

// app.get("/",((_req,res) =>{
//     res.send("Hello Express");
// }))
const absolutePath = __dirname + '/views/index.html'
app.get('/',(req,res)=>{
    res.sendFile(absolutePath);
})

app.get('/json', (req,res)=>{
    var jsonResponse ={"message" : "Hello json"};
    if(process.env.MESSAGE_STYLE == "uppercase"){
        jsonResponse = {"message": "HELLO JSON"};
    }
    res.json(jsonResponse)
})





































 module.exports = app;
