const express = require('express')
const app = express();
var cors = require('cors')
const port = 5000;
const categories = require('./data/category.json')
app.use(cors())



app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/category', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`This app is running on port ${port}`);
})