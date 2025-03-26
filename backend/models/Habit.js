const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  streak: { type: Number, default: 0 },
  lastCompleted: { type: Date },
});

HabitSchema.methods.markDone = function () {
  const today = new Date().setHours(0, 0, 0, 0);
  const lastDay = this.lastCompleted ? new Date(this.lastCompleted).setHours(0, 0, 0, 0) : null;

  if (lastDay && lastDay === today) return;
  this.streak = lastDay === today - 86400000 ? this.streak + 1 : 1;
  this.lastCompleted = new Date();
};

module.exports = mongoose.model('Habit', HabitSchema);
