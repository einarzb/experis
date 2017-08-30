const http = require('http')
const port = 3000

//this function will be invoked every time a request hits the server
const requestHandler = (req, res) => {
  console.log(req.url) // /
  res.write('<h1>Hello Node.js Server!</h1>')
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
