const express = require("express")

const app = express()

const PORT = 3001
const HOSTNAME = 'localhost'

let counter = 0;

app.get('/', (req, res) => {
    res.send(counter = `${counter}`)
})

app.get('/increment', (req, res) => {
    res.send(counter = `${counter+1}`)
})

app.get('/decrement', (req, res) => {
    res.send(counter = `${counter-1}`)
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`)
})