const http = require('http')

const requestListener = (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.StatusCode = 200
    res.end('<h1>Hallo Server!</h1>')
}

const server = http.createServer(requestListener)
const port = 200
const hostname = 'localhost'

server.listen(port, hostname,  () =>  {
    console.log(`server is running on http://${hostname}:${port}`)
})
