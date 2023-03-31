const http = require('http')
http.createServer((req,res) => {
    res.write('bom dia   ')
    res.write('Boa tarde   ')
    res.write('boa noite  ')
    res.end()
}).listen(8080)