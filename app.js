var express = require('express');
 var app = express();
 // route mặc định
 app.use('/',express.static("./build") )  // chỉnh port
const port = process.env.PORT || 4000

app.listen(port, ()=>console.log(`Server started ${port}`));
