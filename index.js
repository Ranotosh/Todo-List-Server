const http = require('http');
const express = require("express");
const app = express();
const config = require('./config');
const details = require('./basic-details/controllers');
const lists = require('./todo-lists/controllers');
var cors = require('cors')
const prefix = config.ROUTE_PREFIX;
const hostname = '127.0.0.1';
const port = 3001;
app.use(express.json());
var corsOptions = {
    origin:['http://localhost:4200'],
    optionsSuccessStatus:200
};
// app.use(function (req,res,next){
//     res.header('Access-Control-Allow-Origin',corsOptions.origin);
//     res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
//     next();
// });

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(prefix+"/getData",async (req,res)=>{
    var msg = 'Hello'+ config.ENV + 'World';
    res.send(msg)
 })

app.get(prefix+"/count",async (req,res)=>{
    var output = await details.getCount(req);
    res.status(200).send(output);
})

app.get(prefix+"/getAllTasks",async (req,res)=>{
    var output = await lists.getAllTasks(req,res);
    res.status(200).send(output);
})

app.put(prefix+"/updateTask/:id",async (req,res)=>{
    var output = await lists.updateTask(req,res);
    res.status(200).send(output);
})

app.post(prefix+"/addTask",async (req,res)=>{
    var output = await lists.addTask(req,res);
    res.status(200).send(output);
})

app.put(prefix+"/deleteTask",async (req,res)=>{
    var output = await lists.deleteTask(req,res);
    res.status(200).send(output);
})

app.post(prefix+"/deleteAllTask",async (req,res)=>{
    var output = await lists.deleteAllTask(req,res);
    res.status(200).send(output);
})


// const dbConnect = require('./postgresdb');
// dbConnect();

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

