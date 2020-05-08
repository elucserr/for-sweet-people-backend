const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
	date: Date,
	time: String,
	level: Number,
});

const Activity = mongoose.model('Resort', activitySchema);

module.exports = Activity;
