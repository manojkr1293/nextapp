// src/features/testSeries/testSeriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const createTestAttemptSlice = createAsyncThunk('testAttempt/create', async (data, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/testattempt/create', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    // Handle non-2xx responses
    if (!res.ok) {
      const errorData = await res.json(); // Capture the error message from the API
      return rejectWithValue(errorData || { message: 'Failed to create test attempt' });
    }

    // Parse JSON response
    
    const result = await res.json();
    console.log('API Response:', result); // Debug response from API

    // Return the `data` object to the slice
    
    console.log('API Response:', result); // Debug response from API
    return result.data;
  } catch (error) {
    console.error('Error creating test attempt:', error);
    return rejectWithValue({ message: error.message });
  }
});


const fetchUserTestAttemptsSlice = createAsyncThunk('testAttempt/fetchByUserID', async(id)=>{
  const res = await fetch(`/api/testattempt?userId=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch testattempt on userid from slice');
  } 
  return await res.json();
})

const fetchTestAttemptSlice = createAsyncThunk('testAttempt/fetchByID', async(id)=>{
  const res = await fetch(`/api/testattempt?attemptid=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch testattempt on userid from slice');
  } 
  return await res.json();
})


const updateTestAttemptSlice = createAsyncThunk('testAttempt/update', async(data)=>{
  
  const res = await fetch(`/api/testattempt/update`,{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data),
  })

  if(!res.ok){
    throw new Error('Failed To create testAttempt in slice');
  }
  return res.json();
})

export const bulkQuestionSubmit = createAsyncThunk(
  'testAttempt/bulkSubmitAnswers',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/testattempt/bulkquestionsubmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit bulk questions');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message || 'Error submitting answers');
    }
  }
);


const finishTestAttemptSlice = createAsyncThunk('testAttempt/finish',async(data)=>{
  const res = await fetch(`/api/testattempt?attemptid=${data.testAttemptId}`,{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok){
    throw new Error('Failed to finsh testAttempt model');
  }
  return await res.json();
})

const initialState = {
  testAttemptModels: [],
  selectedtestAttempt: [],
  userAllTestAttempt:{},
  loading:false,
  error:null
}

const testAttemptModelSlice = createSlice({
  name: 'testAttemptModel',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(createTestAttemptSlice.pending,(state)=>{
        state.loading= true,
        state.error=null
      })
      .addCase(createTestAttemptSlice.fulfilled,(state,action)=>{
        state.loading= false;
        state.testAttemptModels.push(action.payload);
      })
      .addCase(createTestAttemptSlice.rejected,(state,action)=>{
        state.loading= false;
        state.error= action.error.message;
      })
      .addCase(updateTestAttemptSlice.pending,(state)=>{
        state.loading= true,
        state.error=null
      })
      .addCase(updateTestAttemptSlice.fulfilled,(state,action)=>{
        state.loading= false;
        state.testAttemptModels.push(action.payload);
      })
      .addCase(updateTestAttemptSlice.rejected,(state,action)=>{
        state.loading= false;
        state.error= action.error.message;
      })
      .addCase(fetchUserTestAttemptsSlice.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(fetchUserTestAttemptsSlice.fulfilled,(state,action)=>{
        state.loading=false;
        state.userAllTestAttempt = action.payload;
      })
      .addCase(fetchUserTestAttemptsSlice.rejected,(state,action)=>{
        state.loading=false;
        state.error= action.error.message;
      })
      .addCase(fetchTestAttemptSlice.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(fetchTestAttemptSlice.fulfilled,(state,action)=>{
        state.loading=false;
        state.selectedtestAttempt = action.payload;
      })
      .addCase(fetchTestAttemptSlice.rejected,(state,action)=>{
        state.loading=false;
        state.error= action.error.message;
      })
      .addCase(finishTestAttemptSlice.pending,(state)=>{
        state.loading= true,
        state.error=null
      })
      .addCase(finishTestAttemptSlice.fulfilled,(state,action)=>{
        state.loading= false;
        state.testAttemptModels.push(action.payload);
      })
      .addCase(finishTestAttemptSlice.rejected,(state,action)=>{
        state.loading= false;
        state.error= action.error.message;
      })
      .addCase(bulkQuestionSubmit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bulkQuestionSubmit.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(bulkQuestionSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer:testAttemptModelReducer } = testAttemptModelSlice;
export default testAttemptModelReducer;
export const testAttemptModelActions ={
  createTestAttemptSlice,
  updateTestAttemptSlice,
  fetchUserTestAttemptsSlice,
  finishTestAttemptSlice,
  fetchTestAttemptSlice,
  bulkQuestionSubmit
}
