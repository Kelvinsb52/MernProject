const express = require('express')
const Workout = require('../models/workoutModel')
const {createWorkout, 
    getWorkouts, 
    getWorkout, 
    deleteWorkout, 
    updateWorkout} = require('../controllers/workoutController')
const requireAuth = require('../controllers/middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout)

// UPDATE a new workout
router.patch('/:id', updateWorkout)


module.exports = router