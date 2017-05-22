var fs=require('fs');
var readStream=fs.createReadStream('stream_copy_logo.js');
var n=0
readStream
.on('data',function(chunk){
	//触发了data事件
	n++;
	console.log('data emits');
	console.log(Buffer.isBuffer(chunk))
	//console.log(chunk.toString('utf8'));
	//流的暂停
   readStream.pause();
   console.log('data pause');
   //加一个3秒的延迟
   setTimeout(function(){
   	console.log('data pause stop end')
   	readStream.resume()
   },3000)

})
.on('readable',function(){
	console.log('data readable')
})
//触发end事件  目标流不再可写
.on('end',function(){
	console.log(n)
	console.log('data ends')
})
.on('close',function(){
	console.log('data close')

})
.on('error',function(e){
	console.log(e)
})