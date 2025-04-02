import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchAllExamModelsSlice = createAsyncThunk('examModel/fetchAll',async()=>{
    const res = await fetch('/api/exammodels');
    if(!res.ok){
      throw new Error('Failed to fetch exam models from slice');
    } 
    return await res.json();
})

const createExamModelSlice = createAsyncThunk('examModel/create',async(data)=>{
  const res = await fetch('/api/exammodels',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });

  if(!res.ok){
    throw new Error('Failed to create exam models from slice');
  }
  return await res.json();
})

const fetchExamModelById = createAsyncThunk('examModel/fetchById',async(id)=>{
  const res = await fetch(`/api/exammodels?id=${id}`);
  if(!res.ok){
    throw new Error('Failed to fetch exam models by id from slice');
  }
  return await res.json();
})


const updateExamModel = createAsyncThunk('examModel/update',async(id,data)=>{
  const res = await fetch(`/api/exammodels?id=${id}`,{
    method:'PUT',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok){
    throw new Error('Failed to update exam model');
  }
  return await res.json();
})

const deleteExamModel =  createAsyncThunk('examModel/delete',async(id)=>{
  const res = await fetch(`/api/exammodels?id=${id}`,{method:'DELETE'});
  if(!res.ok){
    throw new Error('Failed to delete exam models from slice')
  }
  return await res.json();

})
const initialState={
  examModels:[],
  loading:false,
  error:null
} 


const examModelSlice = createSlice({
  name:'examModel',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAllExamModelsSlice.pending,(state)=>{
      state.loading = true;
      state.error = null; //reset error on new request
    })
    .addCase(fetchAllExamModelsSlice.fulfilled,(state,action)=>{
      state.loading = false;
      state.examModels = action.payload;
    })
    .addCase(fetchAllExamModelsSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error= action.error.message //capture error message from rejected promise
    })
    .addCase(createExamModelSlice.pending, (state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(createExamModelSlice.fulfilled,(state,action)=>{
      state.loading= false;
      state.examModels.push(action.payload);
    })
    .addCase(createExamModelSlice.rejected,(state,action)=>{
      state.loading= false;
      state.error= action.error.message;
    })
  }
})

export const {reducer:examModelReducer} = examModelSlice;
export default examModelReducer;

export const examModelActions = {
  fetchAllExamModelsSlice,
  createExamModelSlice
};