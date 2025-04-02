// src/features/testSeries/testSeriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTestSeriesSlice = createAsyncThunk('testSeries/fetchTestSeries', async () => {
  const response = await fetch('/api/testseries');
  if (!response.ok) throw new Error('Failed to fetch test series');
  return await response.json();
});

const fetchTestSeriesOnIdSlice = createAsyncThunk('testSeries/fetchByID',async(id)=>{
  const res = await fetch(`/api/testseries?testseriesId=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch testseries on Id from slice');
  } 
  return await res.json();
})

const createTestSeriesSlice = createAsyncThunk('testSeries/create', async(data)=>{
  const res = await fetch('/api/testseries/create',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data),
  })

  if(!res.ok){
    throw new Error('Failed To create topic molde in slice');
  }
  return res.json();
})

const testSeriesSlice = createSlice({
  name: 'testSeries',
  initialState: {
    testSeries: [],
    test_series : {},
    selectedSeries: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectSeries: (state, action) => {
      state.selectedSeries = state.testSeries.find(series => series.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestSeriesSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTestSeriesSlice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.testSeries = action.payload;
      })
      .addCase(fetchTestSeriesSlice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTestSeriesSlice.pending,(state)=>{
        state.loading= true,
        state.error=null
      })
      .addCase(createTestSeriesSlice.fulfilled,(state,action)=>{
        state.loading= false;
        state.testSeries.push(action.payload);
      })
      .addCase(createTestSeriesSlice.rejected,(state,action)=>{
        state.loading= false;
        state.error= action.error.message;
      })
      .addCase(fetchTestSeriesOnIdSlice.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(fetchTestSeriesOnIdSlice.fulfilled,(state,action)=>{
        state.loading=false;
        state.test_series = action.payload;
      })
      .addCase(fetchTestSeriesOnIdSlice.rejected,(state,action)=>{
        state.loading=false;
        state.error= action.error.message;
      })
  },
});

export const { reducer:testSeriesReducer } = testSeriesSlice;
export default testSeriesReducer;
export const testSeriesActions ={
  createTestSeriesSlice,
  fetchTestSeriesSlice,
  fetchTestSeriesOnIdSlice
}
