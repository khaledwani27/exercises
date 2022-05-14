const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

const express = require('express')
const app = express()
const port = 4001

const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

//ex1
// const path = require('path')

// app.get('/', function (request, response) {
//     response.send("Server up an running")
// })

app.get('/priceCheck/:name', function (request, response) {
    let name = request.params.name
    let price = { price: null }
    for (let obj of store) {
        if (obj.name === name) {
            price = { price: obj.price }
        }
    }
    response.send(price)
})

app.get('/buy/:name', function (request, response) {
    let name = request.params.name
    for (let obj of store) {
        if (obj.name === name) {
            obj.inventory -= 1
            response.send(`You've just bought ${obj.name} for ${obj.price}, ${obj.inventory} ${obj.name} left in stock.`)
        }
    }
    response.end()
})

app.get('/sale', function (request, response) {
    let params = request.query
    if(params.admin) {
        for(let obj of store) {
            if(obj.inventory > 10){
                obj.price *= 0.5
            }
            console.log(obj.price)
        }
    }
    response.end()
})



app.listen(port, function () {
    console.log("Server up an running on port " + port)
})