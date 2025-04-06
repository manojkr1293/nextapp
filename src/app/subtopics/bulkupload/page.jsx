'use client'
import AdminLayout from '@/app/component/Layout/AdminLayout';
import ProtectedRoute from '@/app/component/ProtectedRoute';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { subTopicSliceActions } from '@/store/slices/subTopicSlice';
import { useRouter } from "next/navigation";
const SubTopicImportExport = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [importError, setImportError] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [subtopics, setSubtopic] = useState([]); // Store questions data
  const dispatch = useDispatch();
  const router = useRouter();
  const {subTopicModels, loading, error} = useSelector((state)=>state.subTopicModel);

  useEffect(()=>{
     dispatch(subTopicSliceActions.fetchsubTopicSlice());
   },[dispatch])
   

  // Handle file export (download action)
  
  const handleExport = () => {
    // Example data for export (Replace with actual questions)
   
    const csv = Papa.unparse(subTopicModels); // Convert questions to CSV format
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subtopics.csv';
    link.click();
  };

  // Handle file import
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    await processFile(file);
  };

  // Handle drop event for drag-and-drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
    setDragOver(true);
  };

  // Process the dropped/uploaded file
  const processFile = async (file) => {
    setIsProcessing(true);
    setImportSuccess(false);
    setImportError(false);

    try {
      // File reading logic here
      const fileReader = new FileReader();
      
      // Check file type (CSV/JSON)
      if (file.type === 'text/csv') {
        fileReader.onload = () => {
          try {
            const content = fileReader.result;

          // Use Papa.parse to parse the CSV content
          Papa.parse(content, {
            complete: (result) => {
              // Handle parsed CSV data
              const parsedData = result.data;

              // Process and transform data
              const transformedData = parsedData
                .filter(item => item.name)  // Filter out incomplete rows
                .map(item => ({
                  ...item
                }));
              console.log(transformedData); // Log the transformed data for debugging
              // Set the transformed data to your state (or dispatch to store)
              setSubtopic(transformedData); // Set the imported questions in state
              setImportSuccess(true); // Set success flag
            },
            header: true, // Assume the first row is the header
            skipEmptyLines: true, // Skip any empty lines in the CSV
          });
          } catch (error) {
            setImportError(true);
            console.error('Error processing CSV:', error);
          }
        };
      } else {
        throw new Error('Invalid file type. Only CSV are allowed.');
      }

      fileReader.readAsText(file);
    } catch (error) {
      console.error('Error processing file:', error);
      setImportError(true);
    } finally {
      setIsProcessing(false);
    }
  };


  // Dispatch data to the backend for saving
  const handleSubmit = async () => {
    setIsProcessing(true);
    if (subtopics.length === 0) {
      alert('No subtopic to submit');
      return;
    }

    try {
      console.log('subtopic2:',subtopics);
      const action = dispatch(subTopicSliceActions.createSubtopicSlice({ subtopics }));
      setSubtopic([]);
      /*if (action.type.endsWith('fulfilled')) {
        setImportSuccess(true);
      } else {
        setImportError(true);
      }*/
      router.push("/subtopics");
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('There was an error submitting the data');
      setImportError(true);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ProtectedRoute roleRequired={'ADMIN'}>
      <AdminLayout>
      <div className="p-4">
      {/* Export Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Sub Topic</h2>
        <button
          onClick={handleExport}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Export Sub Topic (CSV)
        </button>
      </div>

      {/* Import Section */}
      
      <div className="mb-6">
        <label className="block text-gray-700">Import Sub Topic</label>
        <div 
          className={`border border-dashed border-gray-300 p-6 rounded-md text-center ${
            dragOver ? 'bg-gray-200' : 'bg-white'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={() => setDragOver(false)}
        >
          <input
            type="file"
            accept=".csv, .json"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:underline">
            Drag and drop or click to upload a CSV file
          </label>
          <p className="mt-2 text-gray-500">Only CSV files are supported.</p>

          {/* Feedback Messages */}
          {isProcessing && <div className="mt-2 text-blue-500">Processing file...</div>}
          {importSuccess && <div className="mt-2 text-green-500">Sub Topics imported successfully!</div>}
          {importError && <div className="mt-2 text-red-500">There was an error with the file. Please try again.</div>}
        </div>
        
        <div className='flex justify-center items-center h-full p-4'>
          <Button  onClick={handleSubmit} variant="default">Submit Sub Topic</Button>
        </div>
        
      </div>
    </div>
      </AdminLayout>
    </ProtectedRoute>
    
  );
};

export default SubTopicImportExport;
