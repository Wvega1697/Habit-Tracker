import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/habitsSlice';
import { useRouter } from 'next/router';

export default function AddHabit() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(addHabit({ name }));
      router.push('/'); // Redirige a la página principal
    } catch (err) {
      setError('Error al agregar el hábito.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Agregar Nuevo Hábito</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Agregar Hábito
        </button>
      </form>
    </div>
  );
}
