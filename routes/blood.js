const express = require('express');
const Blood = require('../models/Blood');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

// GET /blood list all records
router.get('/', (req, res, next) => {
	Blood.find()
		.then(records => {
			res.status(200).json(records);
		})
		.catch(next);
});

// POST /blood create a record
router.post('/', (req, res, next) => {
	const { date, time, level } = req.body;
	Blood.create({ date, time, level })
		.then(record => {
			res.status(201).json(record);
		})
		.catch(next);
});

// POST /blood/:id delete a record
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Blood.findByIdAndDelete(id)
		.then(record => {
			res.json(record);
		})
		.catch(next);
});

// POST /blood/:id update a record
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { date, time, level } = req.body;
	Blood.findByIdAndUpdate(id, {
		date,
		time,
		level,
	})
		.then(recordUpdated => {
			if (recordUpdated) {
				res.json(recordUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});

module.exports = router;
