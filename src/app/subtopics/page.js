'use client'
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../component/Layout/AdminLayout";
import ProtectedRoute from "../component/ProtectedRoute";
import { useState, useEffect } from 'react';
import { subTopicSliceActions } from "@/store/slices/subTopicSlice";
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const SubTopics = () =>{
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Store the row data to display in the dialog
  const {subTopicModels, loading, error} = useSelector((state)=>state.subTopicModel);
 console.log(subTopicModels);
  useEffect(()=>{
    dispatch(subTopicSliceActions.fetchsubTopicSlice());
  },[dispatch])
   console.log(subTopicModels);
 
    // Function to open the dialog
  const openDialog = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };
  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return(
    <>
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
        <div className="max-w-7xl mx-auto rounded-md shadow-md p-5">
          <h1 className="text-2xl font-semibold mb-6">Sub Topic List</h1>
          <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300 text-left">Sub Topic Name</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Topic</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Subject</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Class</th>
                    <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subTopicModels && subTopicModels.map((subtopics)=>{
                  
                      return(
                        <tr key={subtopics.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border border-gray-300 text-left">{subtopics.name}</td>
                          <td className="px-4 py-2 border border-gray-300 text-left">{subtopics?.topic?.name}</td>
                          <td className="px-4 py-2 border border-gray-300 text-left">{subtopics.topic.subject.name}</td>
                          <td className="px-4 py-2 border border-gray-300 text-left">{subtopics.topic.subject.classModel.name}</td>
                          <td className="px-4 py-2 border border-gray-300 text-left">
                            <button className="text-md shadow-2xl px-3 py-1 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">Edit</button>
                          <button className="text-md shadow-2xl px-3 py-1 rounded-xl ml-4 font-semibold text-white bg-red-700 hover:bg-red-600 mr-2">Delete</button>
                          <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600" variant="outline"onClick={() => openDialog(subtopics)}>
                          View </button>
                          </td>
                          
                        </tr>
                      )
                    })}
                  
                </tbody>
              </table>
          </div>
           {/* Dialog Box */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <DialogContent className="max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Sub Topic</DialogTitle>
            <DialogDescription>
            Sub Topic View
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
          {
          
          selectedRow && ( 
              <>
              <div className='overflow-x-auto bg-slate-200 rounded-md shadow-md'>
                <table className='border-collapse min-w-full table-auto border-gray-300'>
                  <tbody>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Name</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Description</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.description}</td>
                    </tr>
                    
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Class</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.topic.subject.classModel.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Subject</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.topic.subject.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Topic</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.topic.name}</td>
                    </tr>
                    
                 </tbody>
                </table>
              </div>
                
              </>
            )}
          </div>

          <DialogFooter>
            <Button type="button" onClick={closeDialog}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </div>

        
      </AdminLayout>
    </ProtectedRoute>
    </>
  )
}

export default SubTopics;