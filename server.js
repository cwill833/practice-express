const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

// app.set('/')








app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})