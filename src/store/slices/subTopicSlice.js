const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const createSubtopicSlice = createAsyncThunk('subTopicModel/create',async (data)=>{
  const res = await fetch('/api/subtopicmodels',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(data)
    })

    if(!res.ok){
      throw new Error('Failed To create subtopic molde in slice');
    }
    return res.json();
})

const fetchAllSubTopicOnTopicIdSlice = createAsyncThunk('topicModel/fetchByTopicId',async(id)=>{
  const res= await fetch(`/api/subtopicmodels?topicId=${id}`);
  if(!res.ok){
    throw new Error('Failed To fetch subtopic by topic id from slice');
  }
  return res.json();
})


const fetchsubTopicSlice = createAsyncThunk('subTopicModel/fetch',async()=>{
  const res = await fetch('/api/subtopicmodels'); 
  if(!res.ok){
    throw new Error('Failed To fetch subtopic molde in slice');
  }
  return res.json();
}) 
const initialState= {
  subTopicModels:[],
  loading:false,
  error:null
}

const subTopicSlice = createSlice({
  name:'subTopicModel',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(createSubtopicSlice.pending,(state)=>{
      state.loading=true;
      state.error=null
    })
    .addCase(createSubtopicSlice.fulfilled,(state,action)=>{
      state.loading=false;
      state.subTopicModels.push(action.payload);
    })
    .addCase(createSubtopicSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message
    })
    .addCase(fetchsubTopicSlice.pending,(state)=>{
      state.loading=true;
      state.error=null
    })
    .addCase(fetchsubTopicSlice.fulfilled,(state,action)=>{
      state.loading=false;
      state.subTopicModels = action.payload;
    })
    .addCase(fetchsubTopicSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message
    })
    .addCase(fetchAllSubTopicOnTopicIdSlice.pending,(state)=>{
      state.loading=true;
      state.error=null
    })
    .addCase(fetchAllSubTopicOnTopicIdSlice.fulfilled,(state,action)=>{
      state.loading=false;
      state.subTopicModels = action.payload;
    })
    .addCase(fetchAllSubTopicOnTopicIdSlice.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message
    })
    
  }
})

export const {reducer:subTopicReducer} = subTopicSlice;
export default subTopicReducer;
export const subTopicSliceActions={
  fetchsubTopicSlice,
  createSubtopicSlice,
  fetchAllSubTopicOnTopicIdSlice

}