const express = require('express');
const router = express.Router();
const WorkoutDB = require('../models/Workouts');

/* GET */
router.get('/', async (req, res) => {
    try {
        const allWorkouts = await WorkoutDB.find();
        // Add ?json=true to get json instead of html
        if (req.query.json) {
            res.json(allWorkouts);
        } else {
            res.render('workouts', {workouts: allWorkouts})
        }
    } catch (e) {
        res.status(404).json({message: e.message});
    }
});

/* GET SPECIFIC */
router.get('/:workoutId', async (req, res) => {
    try {
        const id = req.params.workoutId;
        const singleWorkout = await WorkoutDB.findById(id);
        res.status(200).json(singleWorkout);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
});

/* POST */
router.post('/', async (req, res) => {
    try {
        const workout = new WorkoutDB({
            weight: await req.body.weight,
            fat_percentage: await req.body.fat_percentage,
            muscle_mass: await req.body.muscle_mass,
        });

        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);

    } catch (e) {
        res.status(400).json({message: e.message});
    }
});

/* PUT */
router.put('/:workoutId', async (req, res) => {
    try {
        const id = req.params.workoutId;
        const putWorkout = await WorkoutDB.findByIdAndUpdate(id, {
            weight: await req.body.weight,
            fat_percentage: await req.body.fat_percentage,
            muscle_mass: await req.body.muscle_mass,
        });

        res.status(201).json(putWorkout);
    } catch (e) {
        res.status(400).json({message: e.message});
    }

});

/* PATCH */
router.patch('/:workoutId', async (req, res) => {
    try {
        const id = req.params.workoutId;
        const patchWorkout = await WorkoutDB.findByIdAndUpdate(id, {
            weight: await req.body.weight,
            fat_percentage: await req.body.fat_percentage,
            muscle_mass: await req.body.muscle_mass,
        });

        res.status(200).json(patchWorkout);
    } catch (e) {
        res.status(400).json({message: e.message});
    }

});

/* DELETE */
router.delete('/:workoutId', async (req, res) => {
    try {
        const id = req.params.workoutId;
        const deleteWorkout = await WorkoutDB.findByIdAndDelete(id);

        res.status(200).json(deleteWorkout);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
});

module.exports = router;
