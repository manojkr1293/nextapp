'use client'
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../component/Layout/AdminLayout";
import ProtectedRoute from "../component/ProtectedRoute";
import { useEffect } from "react";
import { examItemModelActions } from "@/store/slices/examItemSlice";

const ExamItemsList = () =>{
  const dispatch = useDispatch();
  const {examItemModels,error,loading} = useSelector((state)=>state.examItemModel)
  useEffect(()=>{
    dispatch(examItemModelActions.fetchexamItemModelSlice());
  },[dispatch])
  return (
    <>

    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Exam Items List</h1>
          <div className="overflow-auto shadow-md">
              <table className="min-w-full table-auto border-collapse border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {examItemModels && examItemModels.map((examitems)=>{
                       const examsName = examitems.exam && examitems.exam.name;
                       const formattedName = `${examitems.name} - ${examsName}`;
                     
                  
                      return(
                        <tr key={examitems.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-left">{formattedName }</td>
                        <td className="px-4 py-2 border border-gray-300 text-left">{examitems.description}</td>
                        <td className="px-4 py-2 border border-gray-300 text-left"><button className="text-md shadow-2xl px-5 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">Edit</button>
                        <button className="text-md shadow-2xl px-5 py-2 rounded-xl ml-4 font-semibold text-white bg-red-700 hover:bg-red-600">Delete</button></td>
                        
                      </tr>
                      )
                    })}
                  
                </tbody>
              </table>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default ExamItemsList;