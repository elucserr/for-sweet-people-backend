const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		dateOfBirth: String,
		typeOfDiabetes: {
			type: String,
			enum: ['one', 'two', 'lada'],
			default: 'one',
		},
		weight: Number,
		height: Number,
		blood: [{ type: Schema.Types.ObjectId, ref: 'Blood' }],
		activity: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
		diet: [{ type: Schema.Types.ObjectId, ref: 'Diet' }],
		medicine: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],
	},

	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
