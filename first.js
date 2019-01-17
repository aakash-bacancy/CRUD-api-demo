var http=require('http');
var options={
	host:'localhost',
	port:'8585',
	path:'/temp.html'
};
http.createServer(onRequest).listen(8585);
console.log('server has started');
function onRequest(request,response){
	response.writeHead(200,{'Content-type':'text/html'});
	
}
