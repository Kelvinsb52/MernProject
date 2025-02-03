require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// Express App
const app = express()

// Middleware turns all incoming server requests into json
// This way I can access it using req.body 
app.use(express.json())

// req -> info about request
// res -> Used to send a response
// next -> a funciton that passes control to the next middleware or route handle
app.use((req, res, next) => 
{
    // Prints url path of requests and the http method used
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


// Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(()=> 
    {
        // Listen for requests
        app.listen(process.env.PORT, () =>
        {
        console.log('Connected to DB & Listening on Port', process.env.PORT)
        }) 
    
    
    })
    .catch((error) => 
    {
        console.log(error)
    })

