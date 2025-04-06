// src/components/TestSeries.js
'use client'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProtectedRoute from '../component/ProtectedRoute';
import AdminLayout from '../component/Layout/AdminLayout';
import { testSeriesActions } from '@/store/slices/testSeriesSlice';
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

export default function TestSeries() {
  const dispatch = useDispatch();
  const { testSeries, selectedSeries, status, error } = useSelector((state) => state.testSeries);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Store the row data to display in the dialog
  const [selectedQuestionRow, setSelectedQuestionRow] = useState(null);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(testSeriesActions.fetchTestSeriesSlice());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  console.log('testSeries:',testSeries);

  // Function to open the dialog
  const openDialog = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const openQusetionDialog = (row) => {
    setSelectedQuestionRow(row);
    console.log(selectedQuestionRow);
    setIsQuestionDialogOpen(true);
  };
  
  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const closeQuestionDialog = () => {
    setIsQuestionDialogOpen(false);
  };

  return (
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Test Series</h2>

        {/* Table of questions */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Total Marks</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Total Question</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testSeries.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">No Test Series available.</td>
                </tr>
              ) : (
                testSeries.map((series) => ( 
                
                  <tr key={series.id} className='hover:bg-gray-100'>
                    <td className="px-4 py-2 border border-gray-300">{series.name}</td>
                    <td className="px-4 py-2 border border-gray-300">{series.marksTotal}</td>
                    <td className="px-4 py-2 border border-gray-300">{series.questioncount}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mr-2">Delete</button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600" variant="outline" onClick={() => openDialog(series.questions)}> View </button>
            
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
            <DialogTitle>Test Series</DialogTitle>
            <DialogDescription>
             Question List
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
          {
          
          selectedRow && ( 
              <>

              {/* Table of questions */}
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full table-auto border-collapse border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600">
                      <th className="px-4 py-2 border border-gray-300 text-left">Question</th>
                      <th className="px-4 py-2 border border-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRow.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4">No Question available.</td>
                      </tr>
                    ) : (
                      selectedRow.map((question) => ( 
                        <tr key={question.id} className='hover:bg-gray-100'>
                          <td className="px-4 py-2 border border-gray-300" 
                    dangerouslySetInnerHTML={{ __html: question.questiontext }}/>
                          <td className="px-4 py-2 border border-gray-300 text-center">
                            
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mr-2">Delete</button>
                            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600" variant="outline" onClick={() => openQusetionDialog(question)}> View </button>
                  
                          </td>
                        </tr>
                      ))
                    )}
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
