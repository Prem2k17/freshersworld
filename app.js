const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;
var express = require('express');
var compression = require('compression');
var app = express();
var appenv = process.env.NODE_ENV;
var customPort = "";

if(appenv == 'production'){
	app.use(compression({ threshold: 0 , level : 9}));
	app.use(express.static(__dirname + '/dist'));	
}
else{
	app.use(express.static(__dirname + '/static'));
}


app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.all('/*', function(req, res, next) {
	if(appenv == 'production'){		
    res.sendFile('index.html', { root: __dirname + '/dist' });
	}
	else{
		res.sendFile('index.html', { root: __dirname + '/static' });
	}
});

if(appenv == 'production'){
	customPort = 4000;
}
else{
	customPort = 3080;
}

app.listen(env.NODE_PORT || customPort, env.NODE_IP || 'localhost', function () {
  console.log('Application running in '+appenv+" environment with port "+customPort);
  console.log(`Application worker ${process.pid} started...`);
});
