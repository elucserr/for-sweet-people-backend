const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		dateOfBirth: Date,
		typeOfDiabetes: {
			type: String,
			enum: ['one', 'two', 'lada'],
			default: 'one',
		},
		weight: Number,
		height: Number,
		blood_id: [{ type: Schema.Types.ObjectId, ref: 'Blood' }],
		activity_id: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
		diet_id: [{ type: Schema.Types.ObjectId, ref: 'Diet' }],
		medicine_id: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],
	},

	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
