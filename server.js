'use strict'

//**********  Dependencies  **********//

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//**********  Controllers  **********//

var PostsCtrl = require('./api/controllers/PostsCtrl') ;


//**********  Start App  **********//

var app = express();

//**********  Middleware  **********//

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());



//**********  Endpoints  **********//

app.post('/api/listings', PostsCtrl.create);
app.get('/api/listings', PostsCtrl.read);
app.put('/api/listings/:id', PostsCtrl.update);
app.delete('/api/listings/:id', PostsCtrl.delete);


//**********  Set Database location  **********//

var mongoUri = 'mongodb://localhost:27017/ecomm';

//**********  Connections  **********//

var port = 9595;

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("contacting starfleet..");
    console.log("starfleet: connection on", mongoUri);
});

//**********  Listen  **********//

app.listen(port, function() {
    console.log("initializing...");
    console.log("initialized on", port);
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
//                  mongojs
// var mongojs = require('mongojs');
// var db = mongojs('basicEcomm', ['listings']);
//
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////



/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
//              mongojs Endpoints
//
//
// app.get('/api/listings', function(req, res) {
//     db.listings.find(req.query, function(err, result) {
//         if(!err) {
//             console.log(result);
//             res.json(result);
//         }
//         else {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });
// })
//
// app.post('/api/listings', function(req, res) {
//     db.listings.insert(req.body, function(err, result) {
//         if(!err) {
//             console.log(req.body);
//             res.json(result);
//         }
//         else {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });
// })
//
// app.put('/api/listings', function(req, res) {
//     console.log(req.query);
//     db.listings.update(req.query, req.body, function(err, result) {
//         if(!err) {
//             console.log(req.body);
//             res.json(result);
//         }
//         else {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });
// })
//
// app.delete('/api/listings', function(req, res) {
//     db.listings.remove(req.body, function(err, result) {
//         if(!err) {
//             console.log(result);
//             res.json(result);
//         }
//         else {
//             console(err);
//             res.status(500).json(err);
//         }
//     });
// })
//
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
