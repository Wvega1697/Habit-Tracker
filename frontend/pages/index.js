import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits } from '../slices/habitsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { habits, status, error } = useSelector((state) => state.habits);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHabits());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Lista de Hábitos</h1>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {habits.map((habit) => (
            <li key={habit._id}>{habit.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
