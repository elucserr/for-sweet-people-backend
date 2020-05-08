const express = require('express');
const Diet = require('../models/Diet');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

// GET /diet list all records
router.get('/', (req, res, next) => {
	Diet.find()
		.then(records => {
			res.status(200).json(records);
		})
		.catch(next);
});

// POST /diet create a record
router.post('/', (req, res, next) => {
	const { date, time, aliment } = req.body;
	Diet.create({ date, time, aliment })
		.then(record => {
			res.status(201).json(record);
		})
		.catch(next);
});

// POST /diet/:id delete a record
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Diet.findByIdAndDelete(id)
		.then(record => {
			res.json(record);
		})
		.catch(next);
});

// POST /diet/:id update a record
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { date, time, aliment } = req.body;
	Diet.findByIdAndUpdate(id, {
		date,
		time,
		aliment,
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
