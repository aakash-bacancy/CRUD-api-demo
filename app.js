const express=require('express');
const bodyParser = require('body-parser');
const main=require('./routes/route');
const app=express();
const mongoose=require('mongoose');
var path = __dirname + '/views/';


app.use("/view",express.static(__dirname + "/views"));
app.use("/js",express.static(__dirname + "/public/"));
//mongodb connection part
let db_url='mongodb://root:root123@ds259144.mlab.com:59144/samplecrud';
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB,{useNewUrlParser:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongodb connection part end

//server part from bellow
let port=8585;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res){
  res.sendFile(path + "one.html");
});
app.use('/one',main);
app.listen(port,()=>{
	console.log('server running at '+port);
});