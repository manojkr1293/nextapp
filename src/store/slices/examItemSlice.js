import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const createexamItemModelSlice = createAsyncThunk('examItemModel/create',async(data)=>{
  const res = await fetch('/api/examitemsmodels',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok){
    throw new Error('failed to craete from examItem model');
  }
  return res.json();
})


const fetchexamItemModelSlice = createAsyncThunk('examItemModel/fetch',async()=>{
  const res = await fetch('/api/examitemsmodels');
  if(!res.ok){
    throw new Error('Failed to fetch examItem models from slice');
  } 
  return await res.json();
})

const fetchexamItemOnExamIdSlice = createAsyncThunk('examItemModel/fetchByexamID',async(id)=>{
  const res = await fetch(`/api/examitemsmodels?examId=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch exam Item on ExamId models from slice');
  } 
  return await res.json();
})

const fetchexamItemOnIdSlice = createAsyncThunk('examItemModel/fetchByID',async(id)=>{
  const res = await fetch(`/api/examitemsmodels?examitemId=${id}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch exam Item on ExamId models from slice');
  } 
  return await res.json();
})
const initialState = {
  examItemModels:[],
  examitem:{},
  loading:false,
  error:null
}

const examItemModelSlice = createSlice({
 name:'examItemModel',
 initialState,
 reducers:{},
 extraReducers:(builder)=>{
  builder
  .addCase(createexamItemModelSlice.pending,(state)=>{
    state.loading=true;
    state.error=null;
  })
  .addCase(createexamItemModelSlice.fulfilled,(state,action)=>{
    state.loading=false;
    state.examItemModels.push(action.payload);
  })
  .addCase(createexamItemModelSlice.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.error.message;
  })
  .addCase(fetchexamItemModelSlice.pending,(state)=>{
    state.loading = true;
    state.error = null;
  })
  .addCase(fetchexamItemModelSlice.fulfilled,(state,action)=>{
    state.loading = false;
    state.examItemModels = action.payload
  })
  .addCase(fetchexamItemModelSlice.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.error.message
  })
  .addCase(fetchexamItemOnExamIdSlice.pending,(state)=>{
    state.loading=true;
    state.error=null;
  })
  .addCase(fetchexamItemOnExamIdSlice.fulfilled,(state,action)=>{
    state.loading=false;
    state.examItemModels = action.payload;
  })
  .addCase(fetchexamItemOnExamIdSlice.rejected,(state,action)=>{
    state.loading=false;
    state.error= action.error.message;
  })
  .addCase(fetchexamItemOnIdSlice.pending,(state)=>{
    state.loading=true;
    state.error=null;
  })
  .addCase(fetchexamItemOnIdSlice.fulfilled,(state,action)=>{
    state.loading=false;
    state.examitem = action.payload;
  })
  .addCase(fetchexamItemOnIdSlice.rejected,(state,action)=>{
    state.loading=false;
    state.error= action.error.message;
  })
 }
})

export const {reducer:examItemModelReducer} = examItemModelSlice;
export default examItemModelReducer;

export const examItemModelActions = {
  createexamItemModelSlice,
  fetchexamItemModelSlice,
  fetchexamItemOnExamIdSlice,
  fetchexamItemOnIdSlice
}

