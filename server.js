const http = require('http')
const stats = require('./pcRamUsage.js')


http.createServer((req, res) => {
    let url = req.url 

    if (url === '/stats') {
        res.end(JSON.stringify(stats, null, 2))
    } else {
        res.end('<p>Inicio</p>')
    }

}).listen(3000, () => {
    console.log("Funcionando")
})