const express = require("express")

const app = express()

const PORT = 3002
const HOSTNAME = 'localhost'

let counter = 0;

app.get('/', (req, res) => {
    res.send("I am homepage")
})

app.get('/about', (req, res) => {
    res.send("I am about page")
})

app.get('/contact', (req, res) => {
    res.send("support@pwskills.com")
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`)
})