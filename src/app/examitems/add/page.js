'use client'
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { examItemModelActions } from "@/store/slices/examItemSlice";
import { examModelActions } from "@/store/slices/examSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const ExamItemAdd = () =>{
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [description, setDescription] = useState('');
  const [examId, setExamId] = useState('');
  const { examModels } = useSelector((state) => state.examModel); // Assuming exams are fetched from the store
  
  useEffect(()=>{
    dispatch(examModelActions.fetchAllExamModelsSlice());
  },[dispatch])

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({name,description,examId});
    try{
      const examItemsPayload = {
        name,description,examId
      };
      
      dispatch(examItemModelActions.createexamItemModelSlice({examitems:[examItemsPayload]}))
      
    }catch(error){
      console.log('examitems',error)
    }
  }
  
  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="w-full block text-2xl font-medium mb-12">Add Exam Item</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-md font-semibold">Exam Name</label>
              <input name="name" type="text" className="w-full block rounded-md border border-gray-300 p-2 text-black" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <label className="block text-md font-semibold">Description</label>
              <textarea rows={4} name="description" className="w-full block rounded-md border border-gray-300 p-2 text-black" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <label className="text-md w-full block font-semibold"> Exams Category</label>
              <select className="w-full block border border-gray-300 rounded-md p-2 dark:text-black" onChange={(e)=>setExamId(e.target.value)}>
                <option> Please Select</option>
                {examModels.map((exams)=>(
                  <option key={exams.id} value={exams.id}>{exams.name} </option>
                ))}
                
              </select>
            </div>
            <div className="space-y-2">
              <button className="text-md font-medium bg-blue-700 hover:bg-blue-600 text-white py-3 px-5 rounded-xl mt-5">Submit</button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default ExamItemAdd;