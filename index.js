const express 	= require('express');
const path 		= require('path');
const app   	= express();

app.use(express.static(path.join(__dirname,'client/public')));

app.get('/api/*', (req,res) => {
	res.json([{
  	id: 1,
  	title: "hello world",
  	author: "jim bob",
  	read: false
  }, {
  	id: 2,
  	title: "blue moon",
  	author: "jumping cow",
  	read: true
  }]);
});

const port = process.env.PORT || 5000;

app.listen(port,() => {
	console.log("server up and running");
});