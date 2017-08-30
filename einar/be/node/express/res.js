/*
The methods on the response object can send a response to the client,
and terminate the request-response cycle.

If none of these methods are called from a route handler,
the client request will be left hanging.
*/

var express = require('express');
var app = express();

//
// Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download. By default, the Content-Disposition header “filename=” parameter is path (this typically appears in the browser dialog). Override this default with the filename parameter.
//
// When an error occurs or transfer is complete, the method calls the optional callback function fn. This method uses res.sendFile() to transfer the file.

app.get('/downloads', function(req, res){
  console.log("try to download");
  res.download('/report-12345.pdf')
});






/*****************************************************************************************************/
app.listen(8000, function(){
  console.log("rockenroll 8000");
});
