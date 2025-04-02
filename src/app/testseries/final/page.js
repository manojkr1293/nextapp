'use client';
import { useEffect, useState } from "react";
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "@/store/slices/questionSlice";
import { testSeriesActions } from "@/store/slices/testSeriesSlice";
import { useRouter } from "next/navigation";
export default function Final() {
  const [formData, setFormData] = useState(null);
  const router = useRouter();
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const {questionModels, loading,error} = useSelector((state)=>state.questionModel);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Retrieve formData from localStorage
    //const storedFormData = localStorage.getItem('formData');
    const storedFormData = JSON.parse(localStorage.getItem('formData') || '{}');
    if (storedFormData) {
      dispatch(questionActions.fetchQuestionSlice(storedFormData))
      setFormData(storedFormData);
    }

  }, []);

  /*const handleQuestionSelect = (id) => {
    // Toggle the selection of a question
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );

    setFormData((prevData) => {
      return { ...prevData, selectedQuestions };
    });
  };*/

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedQuestionIds = checked
        ? [...prevData.questionIds, value]
        : prevData.questionIds.filter((id) => id !== value);
      return { ...prevData, questionIds: updatedQuestionIds };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData2:',formData);
    try{
      const { name, questiontype, questioncategory } = formData;

      const testSeriesPayload = {
        name,questiontype,questioncategory,selectedQuestions
      };
      
      dispatch(testSeriesActions.createTestSeriesSlice(formData))
      router.push("/testseries");
      //setIsLoading(false);
    }catch(error){
      setIsLoading(false);
      //console.error('Error', error);
    }
    //console.log('Form Data:', formData);
    // console.log('Selected Questions:', selectedQuestions);
    // You can send this data to a backend or proceed further
    //alert('Test Series Created Successfully!');
  };

  if (!formData) {
    return <p>Loading...</p>; // Show a loading state if formData hasn't been loaded yet
  }

  return (
    <ProtectedRoute roleRequired={"ADMIN"}>
            <AdminLayout>
            <div className=" mx-auto bg-white p-5 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Step 2</h2>
      <table className="w-full border-collapse border border-gray-300 mb-5">
  <tbody>
    <tr className="border border-gray-300">
      <td className="w-1/4 px-4 py-2 font-semibold text-gray-700 border border-gray-300">Test Series Name:</td>
      <td className="px-4 py-2 text-gray-600 border border-gray-300">{formData.name}</td>
    </tr>
    <tr className="border border-gray-300">
      <td className="w-1/4 px-4 py-2 font-semibold text-gray-700 border border-gray-300">Question Type:</td>
      <td className="px-4 py-2 text-gray-600 border border-gray-300">{formData.questiontype}</td>
    </tr>
    <tr className="border border-gray-300">
      <td className="w-1/4 px-4 py-2 font-semibold text-gray-700 border border-gray-300">Question Category:</td>
      <td className="px-4 py-2 text-gray-600 border border-gray-300">{formData.questioncategory}</td>
    </tr>
    <tr className="border border-gray-300">
      <td className="w-1/4 px-4 py-2 font-semibold text-gray-700 border border-gray-300">Test Duration:</td>
      <td className="px-4 py-2 text-gray-600 border border-gray-300">{formData.duration} Minutes</td>
    </tr>
  </tbody>
</table>


      
      <div>
        <h3 className="text-xl font-semibold mb-4">Available Questions:</h3>
        <ul className="space-y-4">
          {questionModels.map((question) => (
            <li key={question.id} className="flex items-center space-x-4">
              <input
                type="checkbox"
                id={`${question.id}`}
                //checked={selectedQuestions.includes(question.id)}
                //onChange={() => handleQuestionSelect(question.id)}
                value={`${question.id}`}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor={`${question.id}`}
                className="text-lg font-medium text-gray-700"
              >
               <div
        dangerouslySetInnerHTML={{ __html: question.questiontext }}
      ></div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
      >
        Submit Test Series
      </button>
    </div>
    </AdminLayout>
    </ProtectedRoute>
  );
}
