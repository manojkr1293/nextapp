import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuestionSlice = createAsyncThunk('questionModel/fetch',async(filters, { rejectWithValue })=>{
  try{
    console.log('filters', filters);
    //const res = await fetch('/api/questionsmodels', { params: filters });
    // Convert filters to query string
    const queryParams = new URLSearchParams(filters).toString();

    // Append query string to URL
    const res = await fetch(`/api/questionsmodels?${queryParams}`);
    if(!res.ok){
      throw new Error('failed to fetch question from slice');
    }
    return await res.json();
  }catch(error){
    console.error(error);
    throw new Error(error.message)
  }
})



const createQuestionSlice = createAsyncThunk('questionModel/create',async(data)=>{
  const res = await fetch('/api/questionsmodels',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });

  if(!res.ok){
    throw new Error('Failed to create question models from slice');
  }
  return await res.json();
})

const initialState={
  questionModels:[],
  loading:false,
  error:null
}

const questionSlice = createSlice({
  name:'questionModel',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchQuestionSlice.pending,(state)=>{
      state.loading= true;
      state.error= null;
    })
    .addCase(fetchQuestionSlice.fulfilled,(state,action)=>{
      state.loading= true;
      state.questionModels = action.payload;
    })
    .addCase(fetchQuestionSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message
    })
    .addCase(createQuestionSlice.pending,(state)=>{
      state.loading= true;
      state.error= null;
    })
    .addCase(createQuestionSlice.fulfilled,(state,action)=>{
      state.loading= true;
      state.questionModels.push(action.payload);
    })
    .addCase(createQuestionSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message
    })
    
  }
})

export const {reducer:questionModelReducer} = questionSlice;
export default questionModelReducer;

export const questionActions = {
  fetchQuestionSlice,
  createQuestionSlice,
}