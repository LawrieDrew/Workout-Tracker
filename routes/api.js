const router = require("express").Router();
const Workout = require("../models/workout");
router.post("/api/workouts", (req,res)=>{
    Workout.create({}).then(DBworkout => res.json(DBworkout)).catch(err => res.json(err));
})
router.put("/api/workout/:id", (req,res)=> {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true}).then(DBworkout => res.json(DBworkout)).catch(err => res.json(err));
});

//two gets w/range of 7 days and aggregation of all durations, look up .aggrega

module.exports = router;