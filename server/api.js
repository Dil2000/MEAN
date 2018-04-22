// var express = require('express');
// var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectId;

// const connection = (closure) => {
// 	return MongoClient.connect('mongodb://localhost:27017/mean',(err,db) => {
// 		if(err) {
// 			return console.log(err);
// 		}
// 		closure(db);
// 	});
// }

// let response = {
// 	status: 200,
// 	message: null,
// 	data: []
// }

// var sendError = (err,res) => {
// 	response.status = 501;
// 	response.message = typeof err == "object" ? err.message : err;
// 	res.status(501).json(response);
// }

// router.get('/recipe',(req,res) => {
// 	connection((db) => {
// 		db.collection('recipe').find().toArray().then((recipe) => {
// 			response.data = recipe;
// 			res.json(response);
// 		})
// 	})
// })

// module.exports = router;