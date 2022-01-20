const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    Exersise: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        }
    }]
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;