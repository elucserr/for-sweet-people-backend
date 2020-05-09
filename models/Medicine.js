const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicineSchema = new Schema(
	{
		date: String,
		time: String,
		medicine: {
			type: String,
			enum: [
				'Orinase',
				'Amaryl',
				'Glucotrol',
				'Micronase',
				'DiaBeta',
				'Glucophage',
				'Avandia',
				'Lantus',
				'Levemir',
				'Insulatard',
				'Novarapid',
			],
			default: 'breakfast',
		},
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
