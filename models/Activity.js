const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema(
	{
		type: String,
		km: Number,
		time: String,
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
