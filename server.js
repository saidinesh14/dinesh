var iotf = require("ibmiotf");
var express=require('express');
var app = express();
const bodyParser=require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port=3000;
 app.get('/',function(req,res){
     res.sendFile( __dirname+ '/index.html');
 });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(function(req, res, next)
 {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
var config1  = {
 "org" : "cjjaa5",
 "id" : "1",
 "type" : "truck",
 "auth-method" : "token",
 "auth-token" : "q64wCIyBFaL(8M@Q8g"
}
var config2  = {
 "org" : "cjjaa5",
 "id" : "2",
 "type" : "truck",
 "auth-method" : "token",
 "auth-token" : "jmu8HEz7A)HM-*Ur8M"
}
var config3  = {
 "org" : "cjjaa5",
 "id" : "3",
 "type" : "truck",
 "auth-method" : "token",
 "auth-token" : "w0L5n8z7P6l)yic_Zj"
}
var config4  = {
 "org" : "cjjaa5",
 "id" : "4",
 "type" : "truck",
 "auth-method" : "token",
 "auth-token" : "Vaj7p3YPaV_eo_H*dD"
}
console.log(`Server is running at${port}`)

io.on('connection', function (socket) {

    socket.on('truck1Data', function(data) {
		console.log("Data : "+JSON.stringify(data));
		var deviceClient1 = new iotf.IotfDevice(config1);
		deviceClient1.connect();
		deviceClient1.on('connect', function(){
			console.log("Device1 is connected...");
			deviceClient1.publish('myevt1', 'json', data, 2);
			deviceClient1.disconnect()
		});
	});
	socket.on('truck2Data', function(data) {
		console.log("Data : "+JSON.stringify(data));
		var deviceClient2 = new iotf.IotfDevice(config2);
		deviceClient2.connect();
		deviceClient2.on('connect', function(){
			console.log("Device2 is connected...");
			deviceClient2.publish('myevt2', 'json', data, 2);
			deviceClient2.disconnect()
		});
	});
	socket.on('truck3Data', function(data) {
		console.log("Data : "+JSON.stringify(data));
		var deviceClient3 = new iotf.IotfDevice(config3);
		deviceClient3.connect();
		deviceClient3.on('connect', function(){
			console.log("Device3 is connected...");
			deviceClient3.publish('myevt3', 'json', data, 2);
			deviceClient3.disconnect()
		});
	});
	socket.on('truck4Data', function(data) {
		console.log("Data : "+JSON.stringify(data));
		console.log(config4)
		var deviceClient4 = new iotf.IotfDevice(config4);
		deviceClient4.connect();
		deviceClient4.on('connect', function(){
			console.log("Device4 is connected...");
			deviceClient4.publish('myevt4', 'json', data, 2);
			deviceClient4.disconnect()
		});
	});
});
server.listen(port);
