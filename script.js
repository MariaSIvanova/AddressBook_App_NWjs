//подключение к базе данных MongoDB


var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:3030/test", fuction(err, db){
	if(err){
		return console.log(err);
	}
	//тут взаимодействие
	db.close();
} );

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})