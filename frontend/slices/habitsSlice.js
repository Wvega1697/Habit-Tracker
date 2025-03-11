import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asíncrono: Request GET para obtener todos los hábitos desde el backend
export const fetchHabits = createAsyncThunk('habits/fetchHabits', async () => {
  const response = await fetch('http://localhost:3000/api/habits');
  const data = await response.json();
  return data;
});

const habitsSlice = createSlice({
  name: 'habits',
  initialState: {
    habits: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Reducers para acciones síncronas (si se requieren)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default habitsSlice.reducer;
