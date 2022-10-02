const mongoose = require('mongoose');

// Create Schema (Table information)
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    fat_percentage: {
        type: Number,
        required: true
    },
    muscle_mass: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

/* Create empty modal and Export */
module.exports = mongoose.model('Workouts', WorkoutsSchema);
