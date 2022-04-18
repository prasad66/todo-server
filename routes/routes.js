const express = require('express');
const Task = require('../models/models');

const router = express.Router();

router.get('/', async (req, res) => {

    Task.find((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(doc)
        }
    })


});


router.post('/', async (req, res) => {
    const task = new Task(req.body);

    task.save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(doc);
        }
    });
})

router.put('/:id', async (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(doc);
        }
    })
});

router.delete('/:id', async (req, res) => {
    Task.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(doc);
        }
    })
})

module.exports = router;