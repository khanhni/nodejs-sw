var express = require('express');
 var app = express();
 // route mặc định
 app.get('/', function (req, res) {
     return res.send(req.ip)
 });
 // chỉnh port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });
 module.exports = app;
