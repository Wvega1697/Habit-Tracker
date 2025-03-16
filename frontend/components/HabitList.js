import React from 'react';
import { useSelector } from 'react-redux';

const HabitList = () => {
  const { habits, status, error } = useSelector((state) => state.habits);

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }
  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4">
      {habits.map((habit) => (
        <div key={habit._id} className="flex justify-between items-center border-b py-2">
          <span className="text-lg">{habit.name}</span>
          {/* Botón "Done" integrado en cada item */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
