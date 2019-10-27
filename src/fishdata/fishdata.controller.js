const express = require('express');
const router = express.Router();
const fishService = require('./fishdata.service');

// routes
router.post('/submit', submit);
router.post('/getAll', getAll);

module.exports = router;

function submit(req, res, next) {
    fishService.submit(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    fishService.getAll(req.body)
        .then(response => res.json(response))
        .catch(err => next(err));
}
