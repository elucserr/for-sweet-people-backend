const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
	type: String,
	km: Number,
	time: String,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
