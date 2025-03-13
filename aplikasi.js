const http = require('http')

const requestListener = (req,res) => {
    res.setHeader('Content-type', 'text/html')
    res.statusCode = 200
    const method = req.method
    console.log(`reques method: ${method}`)

    if (method === 'GET') {
        res.end('<h1>hallo GET</h1>')
    }

    else if (method === 'PUT') {
        res.end('<h1>hallo PUT</h1>')
    }

    else if (method === 'POST') {
        res.end('<h1>hallo POST</h1>')
    }
    else if (method === 'DELETE') {
        res.end('<h1>hallo DELETE</h1>')
    }

    else {
        res.statusCode = 400
        res.end('<h1>perintah tidak dikenali - error 400</h1>')
    }
}

const server = http.createServer(requestListener)

const port = 5000
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})