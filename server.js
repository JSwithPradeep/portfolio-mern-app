const express= require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config()
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, './client/build')));
app.get('=', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})
//Routes
app.use('/api/v1/portfolio', require('./routes/route'))

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})