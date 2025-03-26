import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHabits = createAsyncThunk('habits/fetch', async () => {
  const res = await fetch('/api/habits');
  return res.json();
});

export const markHabitDone = createAsyncThunk('habits/markDone', async (id) => {
  const res = await fetch(`/api/habits/${id}/done`, { method: 'PATCH' });
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
      .addCase(markHabitDone.fulfilled, (state, action) => {
        const habit = state.list.find(h => h.id === action.payload.id);
        if (habit) habit.streak = action.payload.streak;
      });
  },
});

export default habitsSlice.reducer;
