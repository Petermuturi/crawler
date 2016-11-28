var express = require('express');
var app = express();
const Crawler = require('simplecrawler');

 app.get('/', (req, res)=> {
var x = [], y = 0;
 	var crawler = new Crawler("http://petermuturi.xyz/");

	crawler.on("crawlstart", function() {
	    console.log ("Crawl starting");
	});

	crawler.on("fetchstart", function(queueItem) {
	    console.log ("fetchStart", queueItem);
      x.push(queueItem)
	});

	crawler.on("fetchcomplete", function(queueItem) {
	    console.log ("fetchcomplete", queueItem);

	});

	crawler.on("complete", function() {
	    console.log ("Finished!");
      res.send(x)
	});
	crawler.maxDepth = 2;
	crawler.start();




 })

var port = Number(process.env.PORT || 3001);

app.listen(port, function(){
	console.log ('server listening on port http://127.0.0.1:3001');
});
