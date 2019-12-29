const express = require('express');
const app = express()
var exphbs  = require('express-handlebars');
const bodyparser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const db = require('./models/index.js');

var PORT = process.env.PORT || 8080;


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');




app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

const routes = require('./controllers/home.js');

app.use('/', routes );


db.connect()
.then(function(){
	app.listen(PORT, function() {
		console.log("Application has started and running on port: ", PORT);
	}).on('error', function(error) {
		console.log("Unable to start app. Error >>>>", error);
	});
})
.catch(function(error){
	console.log("failed connection", error);
})
