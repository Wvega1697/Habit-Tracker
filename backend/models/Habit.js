const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  daysCompleted: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Habit', HabitSchema);
