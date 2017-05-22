var fs =require('fs');
var source=fs.readFile('../buffer/logo.png')
fs.writeFileSync('stream_copy_logo',source);
