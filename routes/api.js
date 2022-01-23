const router = require("express").Router();
const Workout = require("../models/workout");
const path = require("../models/workout");

router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})