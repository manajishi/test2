const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res){
 res.send("hello world");
});


//app.listen(3000, function () {
//});
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); 

 