const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;

//Declare the json.
const to_json=[{ Name :"Manaya",Gender :"Man"}]
const json_string = JSON.stringify(to_json);

app.get('/', function (req, res){
 res.send(json_string);
});

//app.listen(3000, function () {
//});
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); 

 