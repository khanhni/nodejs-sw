var express = require('express');
 var app = express();
 // route mặc định
 app.get('/', function (req, res) {
     return res.send(req.ip)
 });
 // chỉnh port
const port = process.env.PORT
app.listen(port, ()=>console.log('Server started on Port `${port}`))
