'use client'
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddClass = () =>{
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const classPayload = {
        name,description
      };
      
      dispatch(classModelActions.createClassModelSlice({ classes: [classPayload] } ))
      setName('');
      setDescription('');
      setIsLoading(false);
    }catch(error){
      setIsLoading(false);
      console.error('Error', error);
    }
  }

  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
     
      <AdminLayout>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Create New Class</h1>
          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            <div className="space-y-2">
              <label htmlFor="name" className="text-md font-medium block">Class Name</label>
              <input 
              onChange={(e)=>setName(e.target.value)}
              id="name" type="text" className="block w-full border border-gray-300 rounded-md py-1 px-2 text-black "/>
            </div>

            <div className="space-y-2">
              <label className="text-md font-medium block">Description</label>
              <textarea 
              onChange={(e)=>setDescription(e.target.value)}
              name="description" className="w-full block border border-gray-300 rounded-md px-2 py-1 text-black" rows={4}/>
              
            </div>
            <div className="">
            <button type="submit" className="px-5 py-3 mt-4 text-md font-medium bg-blue-700 text-white rounded-xl hover:bg-blue-600">{isLoading ? 'Creating...' : 'Create Class'}</button>
            </div>
            
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default AddClass;