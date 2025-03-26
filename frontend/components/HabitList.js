import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, markHabitDone } from '../store/habitsSlice';

const HabitList = () => {
  const dispatch = useDispatch();
  const habits = useSelector(state => state.habits.list);

  return (
    <div>
      {habits.map(habit => (
        <div key={habit.id} className="p-4 border rounded flex justify-between">
          <span>{habit.name} (🔥 {habit.streak})</span>
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => dispatch(markHabitDone(habit.id))}
          >
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
