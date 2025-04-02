'use client'
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { subjectModelActions } from "@/store/slices/subjectModelSlice";
import { topicModelActions } from "@/store/slices/topicModelSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddTopics = () =>{
  const [name,setName] = useState('');
  const [description, setDescription] = useState('');
  const [subjectId, setSubjectid] = useState('');
  const [classId, setClassId] = useState('');
  const dispatch = useDispatch();
  
  const {classModels, loading, error}  = useSelector((state)=>state.classModel);
  const {subjectModels} = useSelector((state)=>state.subjectModel);
  
  useEffect(()=>{
    dispatch(classModelActions.fetchAllClassModelsSlice());
   // dispatch(subjectModelActions.fetchSubjectModelSlice());
  },[dispatch])
  
  useEffect(()=>{
      if(classId){
        dispatch(subjectModelActions.fetchSubjectOnClassIdSlice(classId));
      }
  },[dispatch,classId])


  const handleSubmit = (e) =>{
    e.preventDefault();
 
    try{
      const topicsPayload = {
        name,description,subjectId
      };
      
      
      dispatch(topicModelActions.createtopicModelSlice({ topics: [topicsPayload] }))
    }catch(error){
      console.log(error);
    }
  }

  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
        <div className="max-w-7xl mx-auto bg-white p-5 rounded-xl shadow-xl border-slate-600 ">
          <h1 className="text-2xl font-semibold mb-10">Add Topic</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xl text-black font-semibold ">Name</label>
              <input type="text" name="name" onChange={(e)=>setName(e.target.value)}
              className="p-2 block rounded-md bg-gray-100 border-gray-300 text-black w-full"/>
            </div>
            <div className="space-y-2">
              <label className="text-xl text-black font-semibold ">Description</label>
              <textarea rows={4} name="description" onChange={(e)=>setName(e.target.value)}
              className="p-2 block rounded-md bg-gray-100 border-gray-300 text-black w-full"/>
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-xl text-black">Select Class</label>
              <select name="classId" onChange={(e)=>setClassId(e.target.value)} className="p-2 w-full block bg-gray-100">
                <option>Please Select</option>
                {
                  classModels.map((classess)=>{
                    return(
                      <option key={classess.id} value={classess.id}>{classess.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-xl text-black">Select Subject</label>
              <select name="subjectID" onChange={(e)=>setSubjectid(e.target.value)} className="p-2 w-full block bg-gray-100">
                <option>Please Select</option>
                {subjectModels.map((subjects)=>{
                  return (
                    <option key={subjects.id} value={subjects.id}>{subjects.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="space-y-2">
              <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-gray-100 font-semibold px-5 py-2">Submit</button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default AddTopics;