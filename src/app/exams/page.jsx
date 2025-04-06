'use client'
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../component/Layout/AdminLayout";
import ProtectedRoute from "../component/ProtectedRoute";
import { useEffect } from "react";
import { examModelActions } from "@/store/slices/examSlice";

const ExamsList = ()=>{
  const dispatch = useDispatch();
  const {examModels} = useSelector((state)=>state.examModel);
  console.log(examModels);
  useEffect(()=>{
    dispatch(examModelActions.fetchAllExamModelsSlice());
  },[dispatch])
  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Exams List</h1>
        <div className="overflow-x-auto shadow-xl">
          <table className="min-w-full table-auto border-collapse border border-gray-300 ">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 text-left">Exam Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
            {examModels && examModels.map((exams)=>(
             <tr className="hover:bg-gray-50" key={exams.id}>
             <td className="px-4 py-2 border border-gray-300">{exams.name}</td>
             <td className="px-4 py-2 border border-gray-300">{exams.description}</td>
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

export default ExamsList;