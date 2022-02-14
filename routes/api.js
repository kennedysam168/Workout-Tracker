const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ day: 1 })
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
})

router.put("/api/workouts:id", (req, res) => {
    Workout.findByIdAndUpdate(params.id,{$push:{exercises: body}})
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.post("/api/workouts/range", function (req, res) {
  Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
      res.json(err);
      });
  });


module.exports = router;