const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/route')

const app = express()
app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://kakarot:7r9d5ckARYXY2cDi@cluster0.ecdqowc.mongodb.net/jaiKisanAssignmentDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(error => console.log(error))

app.use('/', router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on PORT ' + (process.env.PORT || 3000))
})
