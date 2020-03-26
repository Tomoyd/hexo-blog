let http = require("http");
http.createServer(((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    request.on("data", (data) => {
        console.log(data)
    })
    request.on("end", () => {
        response.end()
    })
})).listen(3000, () => {
    console.log("http://localhost:3000")
})
