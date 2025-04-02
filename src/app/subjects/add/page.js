'use client'
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { subjectModelActions } from "@/store/slices/subjectModelSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const SubjectAdd = () =>{
  
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [description, setDescription] = useState('');
  const [classId, setClassId] = useState('');
  const {classModels, loading, error}  = useSelector((state)=>state.classModel);
  useEffect(()=>{
    dispatch(classModelActions.fetchAllClassModelsSlice());
  },[dispatch])

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({name,description,classId});
    try{
      const subjectsPayload = {
        name,description,classId
      };
      
      
      dispatch(subjectModelActions.createSubjectModelSlice({ subjects: [subjectsPayload] }))
    }catch(error){
      console.log('subject',error)
    }
  }
  
  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="w-full block text-2xl font-medium mb-12">Add Subject</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-md font-semibold">Subject Name</label>
              <input name="name" type="text" className="w-full block rounded-md border border-gray-300 p-2 text-black" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <label className="block text-md font-semibold">Description</label>
              <textarea rows={4} name="description" className="w-full block rounded-md border border-gray-300 p-2 text-black" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <label className="text-md w-full block font-semibold">Select Class</label>
              <select className="w-full block border border-gray-300 rounded-md p-2 dark:text-black" onChange={(e)=>setClassId(e.target.value)}>
                <option> Please Select</option>
                {classModels.map((classes)=>(
                  <option key={classes.id} value={classes.id}>{classes.name} </option>
                ))}
                
              </select>
            </div>
            <div className="space-y-2">
              <button className="text-md font-medium bg-blue-700 hover:bg-blue-600 text-white py-3 px-5 rounded-xl mt-5">Create Subject</button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default SubjectAdd;