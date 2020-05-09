const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: String,
		password: String,
		email: String,
		dateOfBirth: Date,
		typeOfDiabetes: {
			type: String,
			enum: ['one', 'two', 'lada'],
			default: 'one',
		},
		weight: Number,
		height: Number,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
