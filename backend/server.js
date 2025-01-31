require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


// Express App
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => 
{
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

