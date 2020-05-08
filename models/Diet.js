const mongoose = require('mongoose');

const { Schema } = mongoose;

const dietSchema = new Schema({
	date: Date,
	time: {
		type: String,
		enum: ['breakfast', 'brunch', 'lunch', 'snack', 'dinner'],
		default: 'breakfast',
	},
	aliment: String,
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
