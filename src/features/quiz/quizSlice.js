import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quizService from './quizService';

const initialState = {
  isLoading: false,
  questions: [],
  message: null,
  answers: [],
};

// Get Quiz
export const getQuiz = createAsyncThunk('quiz/get', async (_, thunkAPI) => {
  try {
    return await quizService.getQuiz();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload.results;
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { addAnswer, reset } = quizSlice.actions;
export default quizSlice.reducer;
