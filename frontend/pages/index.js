// pages/index.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHabits } from '../slices/habitsSlice';
import HabitList from '../components/HabitList';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Disparar la acción para obtener los hábitos al cargar la página
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestor de Hábitos</h1>
      <ProgressBar />
      <HabitList />
    </div>
  );
}
