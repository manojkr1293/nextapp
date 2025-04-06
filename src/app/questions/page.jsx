'use client'
import { questionActions } from '@/store/slices/questionSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../component/ProtectedRoute';
import AdminLayout from '../component/Layout/AdminLayout';

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
export default function QuestionsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Store the row data to display in the dialog
  const dispatch = useDispatch();
  const {questionModels, loading,error} = useSelector((state)=>state.questionModel);
  console.log(questionModels);
  useEffect(() => {
    // Fetch the questions from an API (use your actual endpoint here)
    dispatch(questionActions.fetchQuestionSlice());
    
  }, [dispatch]);

  

  // Function to open the dialog
  const openDialog = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };
  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
      <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Questions List</h2>

        {/* Table of questions */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="px-4 py-2 border border-gray-300">Question</th>
                <th className="px-4 py-2 border border-gray-300">Marks</th>
                <th className="px-4 py-2 border border-gray-300">Question Type</th>
                <th className="px-4 py-2 border border-gray-300">Difficulty Level</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questionModels.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">No questions available.</td>
                </tr>
              ) : (
                questionModels.map((question) => ( 
                  <tr key={question.id} className='hover:bg-gray-100'>
                    <td className="px-4 py-2 border border-gray-300" 
                    dangerouslySetInnerHTML={{ __html: question.questiontext }}/>
                    <td className="px-4 py-2 border border-gray-300">{question.marks}</td>
                    <td className="px-4 py-2 border border-gray-300">{question.questiontype}</td>
                    <td className="px-4 py-2 border border-gray-300">{question.difficultylevel}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {/* Add buttons or links for edit/delete actions */}
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mr-2">Delete</button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600" variant="outline"onClick={() => openDialog(question)}>
                      View </button>
            
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

       {/* Dialog Box */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <DialogContent className="max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Question</DialogTitle>
            <DialogDescription>
             Question View
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
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Question</td>
                      
                      <td className='px-5 py-2 border border-gray-300 text-left' 
                      dangerouslySetInnerHTML={{ __html: selectedRow.questiontext }} />

                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Options</td>
                      <td className='px-5 py-2 border border-gray-300 text-left' 
                      dangerouslySetInnerHTML={{ __html: selectedRow.options }} />
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Correct Answer</td>
                      <td className='px-5 py-2 border border-gray-300 text-left' dangerouslySetInnerHTML={{ __html: selectedRow.correctanswer }} />
                    </tr>
                    
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Marks</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.marks}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Question Type</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.questiontype}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Difficulty Level</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.difficultylevel}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Exams</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.examId}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Class</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.classModel &&selectedRow.classModel.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Subject</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.subject && selectedRow.subject.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Topic</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.topic && selectedRow.topic.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Sub Topic</td>
                      <td className='px-5 py-2 border border-gray-300 text-left'>{selectedRow.subtopic && selectedRow.subtopic.name}</td>
                    </tr>
                    <tr className='hover:bg-slate-50'>
                      <td className='px-5 py-2 border border-gray-300 text-left font-semibold'>Solution</td>
                      
                      <td className='px-5 py-2 border border-gray-300 text-left' dangerouslySetInnerHTML={{ __html: selectedRow.solution }} />
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
    </div>
      </AdminLayout>
    </ProtectedRoute>
    
  );
}
