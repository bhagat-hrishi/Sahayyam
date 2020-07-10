const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
var socket=require('socket.io');


var donorcontroller=require('./controllers/donorcontroller.js');
var receivercontroller=require('./controllers/receivercontroller');
const {mongoose} = require('./db.js')

var app=express();
app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));//this will allow request from any port number or domain


port = process.env.NODE_PORT || 3000;
const server=app.listen(port,()=>{console.log('node server started',`${port}`)})

app.use('/donor', donorcontroller)
app.use('/receiver',receivercontroller);
app.use('/donor',donorcontroller);

const io=socket(server)
