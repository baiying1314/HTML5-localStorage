let express = require('express');
let path = require('path');
var urlapi = require('url');

let app = new express();

app.use(express.static(__dirname+'/'));

app.listen(3002,()=>{
    console.log('success 3001');
});


app.use('*',(req,res)=>{
    var url = urlapi.parse(req.url);

    var filename = url.pathname.substring(1);
    var type = getType(filename.substring(filename.lastIndexOf('.')+1));
    res.sendFile(path.resolve('./drag.html'), { 'Content-Type' : type });
});

function getType(endTag){
    var type=null;
    switch(endTag){
        case 'html' :
            type = 'text/html; charset=UTF-8';
            break;
        case 'htm' :
            type = 'text/html; charset=UTF-8';
            break;
        case 'js' :
            type = 'application/javascript; charset="UTF-8"';
            break;
        case 'css' :
            type = 'text/css; charset="UTF-8"';
            break;
        case 'txt' :
            type = 'text/plain; charset="UTF-8"';
            break;
        case 'manifest' :
            type = 'text/cache-manifest; charset="UTF-8"';
            break;
        default :
            type = 'application/octet-stream';
            break;
    }
    return type;
}