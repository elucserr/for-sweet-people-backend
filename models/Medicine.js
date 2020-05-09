const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicineSchema = new Schema(
	{
		date: Date,
		time: String,
		medicine: String,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
