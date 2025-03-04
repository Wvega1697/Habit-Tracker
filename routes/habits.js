const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Endpoint para crear un hábito
router.post('/', async (req, res) => {
  try {
    const habit = new Habit(req.body);
    const savedHabit = await habit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para eliminar un hábito
router.delete('/:id', async (req, res) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
    if (!deletedHabit) return res.status(404).json({ message: 'Hábito no encontrado' });
    res.status(200).json({ message: 'Hábito eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para actualizar un hábito
router.put('/:id', async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHabit) return res.status(404).json({ message: 'Hábito no encontrado' });
    res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
