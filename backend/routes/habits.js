const express = require('express');
const Habit = require('../models/Habit');
const auth = require('../middleware/auth');

const router = express.Router();

// Obtener hábitos del usuario autenticado
router.get('/', auth, async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user.id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los hábitos', error: error.message });
  }
});

// Agregar un nuevo hábito
router.post('/', auth, async (req, res) => {
  try {
    const { name } = req.body;
    const newHabit = new Habit({
      userId: req.user.id,
      name,
      streak: 0,
      lastCompleted: null
    });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el hábito', error: error.message });
  }
});

// Marcar hábito como completado (Done)
router.patch('/:id/done', auth, async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: 'Hábito no encontrado' });

    habit.markDone();
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el hábito', error: error.message });
  }
});

// Reiniciar racha de un hábito
router.patch('/:id/reset', auth, async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: 'Hábito no encontrado' });

    habit.streak = 0;
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Error al reiniciar el hábito', error: error.message });
  }
});

module.exports = router;
