const express = require('express');
const User = require('../models/User');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

// GET /user GET PROFILE
router.get('/:id', (req, res, next) => {
	User.find(req.params.id)
		.populate('blood')
		.populate('activity')
		.populate('diet')
		.populate('medicine')

		.then(profile => {
			res.status(200).json(profile);
		})
		.catch(next);
});

// DELETE /user/:id delete profile
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	User.findByIdAndDelete(id)
		.then(profile => {
			res.json(profile);
		})
		.catch(next);
});

// PUT /user/:id update profile
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { username, password, dateofBirth, typeOfDiabetes, weight, email, height } = req.body;
	User.findByIdAndUpdate(id, {
		username,
		password,
		dateofBirth,
		typeOfDiabetes,
		email,
		weight,
		height,
	})
		.then(profileUpdated => {
			if (profileUpdated) {
				res.json(profileUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});

module.exports = router;
