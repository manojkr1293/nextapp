import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchtopicModelSlice = createAsyncThunk('topicModel/fetch', async()=>{
 const res = await fetch('/api/topicmodels');
 if(!res.ok){
  throw new Error('Failed to fetch topic model in slice');
 }
 return res.json();
})

const fetchAllTopicOnSubjectIdSlice = createAsyncThunk('topicModel/fetchBySubjectId',async(id)=>{
  const res= await fetch(`/api/topicmodels?subjectId=${id}`);
  if(!res.ok){
    throw new Error('Failed To fetch topic by calss id from slice');
  }
  return res.json();
})

const createtopicModelSlice = createAsyncThunk('topicModel/create', async(data)=>{
  const res = await fetch('/api/topicmodels',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data),
  })

  if(!res.ok){
    throw new Error('Failed To create topic molde in slice');
  }
  return res.json();
})


const initialState = {
  topicModels:[],
  loading:false,
  error:null
}
const topicModelSlice = createSlice({
  name:'topicModel',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchtopicModelSlice.pending,(state)=>{
      state.loading= true;
      state.error=null
    })
    .addCase(fetchtopicModelSlice.fulfilled,(state,action)=>{
      state.loading= false;
      state.topicModels = action.payload;
    }) 
    .addCase(fetchtopicModelSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message
    })
    .addCase(createtopicModelSlice.pending,(state)=>{
      state.loading= true,
      state.error=null
    })
    .addCase(createtopicModelSlice.fulfilled,(state,action)=>{
      state.loading= false;
      state.topicModels.push(action.payload);
    })
    .addCase(createtopicModelSlice.rejected,(state,action)=>{
      state.loading= false;
      state.error= action.error.message;
    })
    .addCase(fetchAllTopicOnSubjectIdSlice.pending,(state)=>{
      state.loading= true;
      state.error=null;
    })
    .addCase(fetchAllTopicOnSubjectIdSlice.fulfilled,(state,action)=>{
      state.loading=false;
      state.topicModels=action.payload;
    })
    .addCase(fetchAllTopicOnSubjectIdSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
  }
})

export const {reducer:topicModelReducer} = topicModelSlice;
export default topicModelReducer;
export const topicModelActions ={
  createtopicModelSlice,
  fetchtopicModelSlice,
  fetchAllTopicOnSubjectIdSlice
}