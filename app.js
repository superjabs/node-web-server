const http = require('http');
const fs = require('fs');
const port = 5000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if(err){
      res.writeHead(404);
    }
    res.write(data);
    res.end();
  });
}

const server = http.createServer((req, res) => {
  const url = req.url
  switch(url){
    case '/about':
      renderHTML('./about.html', res);
      break;
    case '/note':
      renderHTML('./note.html', res);
      break;
    default :
      renderHTML('./index.html', res)
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});