const express = require('express');
const Medicine = require('../models/Medicine');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

// GET /medicine list all records
router.get('/', (req, res, next) => {
	Medicine.find()
		.then(records => {
			res.status(200).json(records);
		})
		.catch(next);
});

// POST /medicine create a record
router.post('/', (req, res, next) => {
	const { date, time, medicine } = req.body;
	Medicine.create({ date, time, medicine })
		.then(record => {
			res.status(201).json(record);
		})
		.catch(next);
});

// DELETE /medicine/:id delete a record
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Medicine.findByIdAndDelete(id)
		.then(record => {
			res.json(record);
		})
		.catch(next);
});

// PUT /medicine/:id update a record
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { date, time, medicine } = req.body;
	Medicine.findByIdAndUpdate(id, {
		date,
		time,
		medicine,
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
