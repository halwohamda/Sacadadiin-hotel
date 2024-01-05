const express = require('express');
const app = express();
const port = 5432
app


app.use(express.json());
const hotelRoute = require('./routes/hotelRoute')

app.use('./api/hotel/',hotelRoute)

// server configuration
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
