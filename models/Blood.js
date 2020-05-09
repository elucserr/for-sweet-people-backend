const mongoose = require('mongoose');

const { Schema } = mongoose;

const bloodSchema = new Schema(
	{
		date: String,
		time: String,
		level: Number,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Blood = mongoose.model('Blood', bloodSchema);

module.exports = Blood;
