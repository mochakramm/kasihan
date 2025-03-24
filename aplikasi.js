const http = require('http')

const requestListener = (req, res) => {
    const {method, url} = req
    
}

const server = http.createServer(requestListener)
const port = 5000
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`server berjalan di http://${hostname}:${port}`)
})