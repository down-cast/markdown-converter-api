const express = require('express');
const showdown = require('showdown');
const bodyParser = require('body-parser')

const app = express()
const port = 3000
let converter = new showdown.Converter();


app.use(bodyParser.text());
app.post('/api/v1/convert-to-html', (req, res) => {
    res.send(converter.makeHtml(req.body))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
