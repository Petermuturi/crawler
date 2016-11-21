var express = require('express');
var app = express();
 
 app.get('/', (req, res)=> {
 	res.send('crawler')
 })

var port = Number(process.env.PORT || 3001);

app.listen(port, function(){
	console.log ('server listening on port http://127.0.0.1:3001');
});