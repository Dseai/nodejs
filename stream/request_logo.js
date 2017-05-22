var http=require('http');
var fs=require('fs');
var request=require('request');
http
.createServer(function(req,res){
	// fs.readable('./buffer/logo.png',function(err,data){
	// 	if(err){
	// 		res.end('file not exist!')
	// 	}
	// 	else{
	// 		res.writeHeader(200,{'Context-Type':'text/html'})
	// 		res.end(data);
	// 	}
	// })
	//用pipe实现上面注释的代码
	//1.从本地pipe node运行 之后在浏览器输入  localhost:8090出现效果
	//fs.createReadStream('../buffer/logo.png').pipe(res);
	//2.边下载边pipe 要先下载 require 利用npm;pipe方法帮我们监听data事件，不断发送给客户端  
 	request('http://static.mukewang.com/static/img/common/logo.png?t=2.3').pipe(res);
})
.listen(8090)