import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchAllClassModelsSlice = createAsyncThunk('classModel/fetchAllClassModels',async()=>{
    const res = await fetch('/api/classmodels');
    if(!res.ok){
      throw new Error('Failed to fetch class models from slice');
    } 
    return await res.json();
})

const createClassModelSlice = createAsyncThunk('classModel/createClassModels',async(data)=>{
  const res = await fetch('/api/classmodels',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });

  if(!res.ok){
    throw new Error('Failed to create class models from slice');
  }
  return await res.json();
})

const fetchClassModelById = createAsyncThunk('classModel/fetchById',async(id)=>{
  const res = await fetch(`/api/classmodels?id=${id}`);
  if(!res.ok){
    throw new Error('Failed to fetch class models by id from slice');
  }
  return await res.json();
})


const updateClassModel = createAsyncThunk('classModel/update',async(id,data)=>{
  const res = await fetch(`/api/classmodels?id=${id}`,{
    method:'PUT',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok){
    throw new Error('Failed to update class model');
  }
  return await res.json();
})

const deleteClassModel =  createAsyncThunk('classModel/delete',async(id)=>{
  const res = await fetch(`/api/classmodels?id=${id}`,{method:'DELETE'});
  if(!res.ok){
    throw new Error('Failed to delete class models from slice')
  }
  return await res.json();

})
const initialState={
  classModels:[],
  selectedClassModel: null,
  loading:false,
  error:null
} 


const classModelSlice = createSlice({
  name:'classModel',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAllClassModelsSlice.pending,(state)=>{
      state.loading = true;
      state.error = null; //reset error on new request
    })
    .addCase(fetchAllClassModelsSlice.fulfilled,(state,action)=>{
      state.loading = false;
      state.classModels = action.payload;
    })
    .addCase(fetchAllClassModelsSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error= action.error.message //capture error message from rejected promise
    })
    .addCase(createClassModelSlice.pending, (state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(createClassModelSlice.fulfilled,(state,action)=>{
      state.loading= false;
      state.classModels.push(action.payload);
    })
    .addCase(createClassModelSlice.rejected,(state,action)=>{
      state.loading= false;
      state.error= action.error.message;
    })
    .addCase(fetchClassModelById.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(fetchClassModelById.fulfilled,(state,action)=>{
      state.loading=false;
      state.selectedClassModel=action.payload;
    })
    .addCase(fetchClassModelById.rejected,(state,action)=>{
      state.loading=false;
      state.error= action.error.message
    })
  }
})

export const {reducer:classModelReducer} = classModelSlice;
export default classModelReducer;

export const classModelActions = {
  fetchAllClassModelsSlice,
  createClassModelSlice
};