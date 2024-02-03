const http = require('http');
const routes = require('./route/routes')

// PESQUISAR METODOS DE ARRAY DE HIGHER ORDER FUNCTION NO JAVASCRIPT(pesquisar em ingles)

const server = http.createServer((req, res) => {
    console.log({url: req.url, method: req.method})

    const route = routes.find((route) => route.url === req.url && route.method === req.method)

    if (route) {
        route.handler(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end("Not found");
    }
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server started at port ${PORT}`));