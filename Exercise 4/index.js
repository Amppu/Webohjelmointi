const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const users = require('./routes/users')
const products = require('./routes/products')
const invoice = require('./routes/invoice')


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', users)
app.use('/products', products)
app.use('/invoice', invoice)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})