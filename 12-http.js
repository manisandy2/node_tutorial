const http = require("http")

const server =  http.createServer((req,res)=>{
    if (req.url === "/"){
        // res.write()
        res.end("i am here the home page")
    }
    if (req.url === "/about"){
        // res.write()
        res.end("here about page")
    }
    res.end(`
        <h1>back to Home page</h1>
        <a href="/">home page</a>
    `)
})

server.listen(5000)