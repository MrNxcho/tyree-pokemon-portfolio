const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=__dirname;
http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end('Bad request')}
const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}
fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.css':'text/css','.js':'text/javascript'})[path.extname(file)]||'application/octet-stream');res.end(data)})}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
