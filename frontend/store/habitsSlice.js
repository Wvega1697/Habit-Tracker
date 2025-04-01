import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchHabits = createAsyncThunk('habits/fetch', async () => {
  const res = await fetch('http://localhost:5000/api/habits', {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
  });
  return res.json();
});

export const addHabit = createAsyncThunk('habits/add', async (habitData) => {
  const res = await fetch('http://localhost:5000/api/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(habitData),
  });
  return res.json();
});

export const markHabitDone = createAsyncThunk('habits/markDone', async (id) => {
  const res = await fetch(`http://localhost:5000/api/habits/${id}/done`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
  });
  return res.json();
});

const habitsSlice = createSlice({
  name: 'habits',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addHabit.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(markHabitDone.fulfilled, (state, action) => {
        const index = state.list.findIndex(habit => habit._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  },
});

export default habitsSlice.reducer;
