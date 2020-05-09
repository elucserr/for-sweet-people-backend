const mongoose = require('mongoose');

const { Schema } = mongoose;

const dietSchema = new Schema(
	{
		date: String,
		time: {
			type: String,
			enum: ['breakfast', 'brunch', 'lunch', 'snack', 'dinner'],
			default: 'breakfast',
		},
		aliment: String,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
