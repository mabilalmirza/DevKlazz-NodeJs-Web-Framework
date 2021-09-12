import http from 'http'
import url from 'url'

export default class Server {

    #server

    constructor(router) {
        this.#server = http.createServer(mainHandler(router))
    }

    start(port) {
        this.#server.listen(port, () => console.log("Server started on port " + port))
    }
}

function mainHandler(router) {

    return function (req, res) {
        try {
            handle(req, res)
        } catch (err) {
            res.writeHead(500);
        }

    }

    function handle(req, res) {

        const method = (req.method || "GET").toLowerCase()
        const { pathname, query } = url.parse(req.url, true)
        const route = router[pathname]
        const handler = (route && route[method]) || notFoundHandler

        const data = { method, path: pathname, query, headers: req.headers }


        try {
            const response = handler(data)

            const status = response.status || 200
            const responseHeaders = {
                ...response.headers,
                'Content-Type': 'application/json'
            }
            res.writeHead(status, responseHeaders);

            if (response.payload) {
                res.write(JSON.stringify(response.payload))
            }

        } catch (err) {
            const status = err.status || 500
            const responseHeaders = {
                ...err.headers,
                'Content-Type': 'application/json'
            }
            res.writeHead(status, responseHeaders);
            if (err.payload) {
                res.write(JSON.stringify(err.payload))
            }
        }


        res.end()
    }

}



export function notFoundHandler(data) {
    return {
        status: 404,
        payload: "Page Not Found"
    }
}


