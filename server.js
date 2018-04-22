const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(routes);

mongoose.Promise = global.Promise;

var connectionString;

if (process.env.PORT) {
	// cloud
   connectionString = 'mongodb://localhost:27017/mean';
} else {
	//local
    connectionString = 'mongodb://localhost:27017/mean';
}

// Start listening.
mongoose.connect(connectionString).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port ' + PORT);
    });
});