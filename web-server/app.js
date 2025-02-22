const http = require('http') 

const requestListener = (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.StatusCode = 200
    res.end('<h1>hallo rumahku!</h1>')
}

const server = http.createServer(requestListener)
const port = 5000
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`rumah udah jalan di http://${hostname}:${port}`)
})