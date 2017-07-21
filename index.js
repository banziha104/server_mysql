var mysql = require("mysql");
var http = require("http");

var server = http.createServer(80,function (request , response ){
    //request  -> node.js가 요청받을떄 받음
    //response -> node.js가 응답할 떄 사용하라고 넘겨줌
    request.url
    requestParser(request);
    sendResponse(response);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Hello");
});

server.listen(80, function () {
    console.log("server's running....");
});
function requestParser(request,response) {
    console.log(request.url);
    if (request.url === "/hello"){
        sendResponse(response)
    }else{
        send404(response);
    }
}

function sendResponse(response) {
    response.
}
function send404(response) {
    response.writeHead(404,{'Content-type':'text/html'});
    response.end("404 Page Not Found");
}