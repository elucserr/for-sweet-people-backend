const express = require('express');
const Activity = require('../models/Activity');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

// GET /activity list all records
router.get('/', (req, res, next) => {
	Activity.find()
		.then(records => {
			res.status(200).json(records);
		})
		.catch(next);
});

// POST /activity create a record
router.post('/', (req, res, next) => {
	const { type, km, time } = req.body;
	Activity.create({ type, km, time })
		.then(record => {
			res.status(201).json(record);
		})
		.catch(next);
});

// DELETE /activity/:id delete a record
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Activity.findByIdAndDelete(id)
		.then(record => {
			res.json(record);
		})
		.catch(next);
});

// PUT /activity/:id update a record
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { type, km, time } = req.body;
	Activity.findByIdAndUpdate(id, {
		type,
		km,
		time,
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
