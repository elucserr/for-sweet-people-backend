const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicineSchema = new Schema(
	{
		date: String,
		time: String,
		medicine: String,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
