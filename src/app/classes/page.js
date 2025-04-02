'use client'
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../component/Layout/AdminLayout";
import ProtectedRoute from "../component/ProtectedRoute";
import { useEffect } from "react";
import { classModelActions } from "@/store/slices/classModelSlice";

const ClassList = () =>{
  const dispatch = useDispatch();
  const {classModels, loading, error}  = useSelector((state)=>state.classModel);
  useEffect(()=>{
    dispatch(classModelActions.fetchAllClassModelsSlice());
  },[dispatch])
  
  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Class List</h1>
        <div className="overflow-x-auto shadow-xl">
          <table className="min-w-full table-auto border-collapse border border-gray-300 ">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 text-left">Class Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
           {classModels && classModels.map((classes)=>(
             <tr className="hover:bg-gray-50" key={classes.id}>
             <td className="px-4 py-2 border border-gray-300">{classes.name}</td>
             <td className="px-4 py-2 border border-gray-300">{classes.description}</td>
             <td className="px-4 py-2 border border-gray-300">
               <button className="px-5 py-2 text-sm rounded-xl bg-blue-700 hover:bg-blue-600 text-white mr-2">Edit</button>
               <button className="px-5 py-2 text-sm text-white rounded-xl bg-red-700 hover:bg-red-600">Delete</button>
             </td>
             
           </tr>
           ))}
            </tbody>
          </table>
        </div>
      </div>

    </AdminLayout>

    </ProtectedRoute>
    </>
  )
}

export default ClassList;