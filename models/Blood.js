const mongoose = require('mongoose');

const { Schema } = mongoose;

const bloodSchema = new Schema({
	date: Date,
	time: String,
	level: Number,
});

const Blood = mongoose.model('Blood', bloodSchema);

module.exports = Blood;
