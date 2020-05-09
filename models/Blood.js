const mongoose = require('mongoose');

const { Schema } = mongoose;

const bloodSchema = new Schema(
	{
		date: Date,
		time: String,
		level: Number,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Blood = mongoose.model('Blood', bloodSchema);

module.exports = Blood;
