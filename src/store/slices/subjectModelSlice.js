import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const createSubjectModelSlice = createAsyncThunk('subjectModel/create',async(data)=>{
  const res = await fetch('/api/subjectmodels',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok){
    throw new Error('failed to craete from subject model');
  }
  return res.json();
})


const fetchSubjectModelSlice = createAsyncThunk('subjectModel/fetch',async()=>{
  const res = await fetch('/api/subjectmodels');
  if(!res.ok){
    throw new Error('Failed to fetch subject models from slice');
  } 
  return await res.json();
})

const fetchSubjectOnClassIdSlice = createAsyncThunk('subjectModel/fetchByclassID',async(id)=>{
  const res = await fetch(`/api/subjectmodels?classId=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch subjectonclassID models from slice');
  } 
  return await res.json();
})
const initialState = {
  subjectModels:[],
  loading:false,
  error:null
}

const subjectModelSlice = createSlice({
 name:'subjectModel',
 initialState,
 reducers:{},
 extraReducers:(builder)=>{
  builder
  .addCase(createSubjectModelSlice.pending,(state)=>{
    state.loading=true;
    state.error=null;
  })
  .addCase(createSubjectModelSlice.fulfilled,(state,action)=>{
    state.loading=false;
    state.subjectModels.push(action.payload);
  })
  .addCase(createSubjectModelSlice.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.error.message;
  })
  .addCase(fetchSubjectModelSlice.pending,(state)=>{
    state.loading = true;
    state.error = null;
  })
  .addCase(fetchSubjectModelSlice.fulfilled,(state,action)=>{
    state.loading = false;
    state.subjectModels = action.payload
  })
  .addCase(fetchSubjectModelSlice.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.error.message
  })
  .addCase(fetchSubjectOnClassIdSlice.pending,(state)=>{
    state.loading=true;
    state.error=null;
  })
  .addCase(fetchSubjectOnClassIdSlice.fulfilled,(state,action)=>{
    state.loading=false;
    state.subjectModels = action.payload;
  })
  .addCase(fetchSubjectOnClassIdSlice.rejected,(state,action)=>{
    state.loading=false;
    state.error= action.error.message;
  })
 }
})

export const {reducer:subjectModelReducer} = subjectModelSlice;
export default subjectModelReducer;

export const subjectModelActions = {
  createSubjectModelSlice,
  fetchSubjectModelSlice,
  fetchSubjectOnClassIdSlice
}

