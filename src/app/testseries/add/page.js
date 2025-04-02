'use client';
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { subjectModelActions } from "@/store/slices/subjectModelSlice";
import { topicModelActions } from "@/store/slices/topicModelSlice"; // Ensure correct import for topics
import { examModelActions } from '@/store/slices/examSlice';
import { subTopicSliceActions } from '@/store/slices/subTopicSlice';
import { examItemModelActions } from '@/store/slices/examItemSlice';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'


const TestseriesAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    questioncount: 0,
    marksTotal: 0,
    duration: 0, // New duration field
    questiontype: "MCQ",
    questioncategory: 'exam',
    examIds: "",
    examitemId:"",
    classModelId: "",
    subjectId: "",
    topicId: "",
    subtopicId: "",
    questionIds: [],
  });

  const { classModels } = useSelector((state) => state.classModel);
  const { subjectModels } = useSelector((state) => state.subjectModel);
  const { topicModels } = useSelector((state) => state.topicModel);
  const { examModels} = useSelector((state) => state.examModel); // Assuming exams are fetched from the store
  const { examItemModels }  = useSelector((state)=>state.examItemModel);
  const { subTopicModels } = useSelector((state) => state.subTopicModel);
  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(classModelActions.fetchAllClassModelsSlice());
    dispatch(examModelActions.fetchAllExamModelsSlice()); // Fetch exams when the component mounts
  }, [dispatch]);

  useEffect(() => {
    if (formData.examIds) {
      
      dispatch(examItemModelActions.fetchexamItemOnExamIdSlice(formData.examIds));
      setFormData((prevData) => ({
        ...prevData,
        examitemId: ""
      }));
    }
  }, [dispatch, formData.examIds]);

  useEffect(() => {
    if (formData.classModelId) {
      dispatch(subjectModelActions.fetchSubjectModelSlice(formData.classModelId));
      setFormData((prevData) => ({
        ...prevData,
        subjectId: "", // Reset subject when class changes
        topicId: "",   // Reset topic when class changes
        subtopicId:""
      }));
    }
  }, [dispatch, formData.classModelId]);

  useEffect(() => {
    if (formData.subjectId) {
      dispatch(topicModelActions.fetchAllTopicOnSubjectIdSlice(formData.subjectId));
      setFormData((prevData) => ({
        ...prevData,
        topicId: "", // Reset topic when subject changes
        subtopicId:""
      }));
    }
  }, [dispatch, formData.subjectId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      router.push('final');
      
      localStorage.setItem("formData", JSON.stringify(formData));
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <ProtectedRoute roleRequired={"ADMIN"}>
        <AdminLayout>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg mt-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Test Series</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Test Series Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter test series name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Question Count</label>
                  <input
                    type="number"
                    name="questioncount"
                    value={formData.questioncount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Total Marks</label>
                  <input
                    type="number"
                    name="marksTotal"
                    value={formData.marksTotal}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Duration (in minutes)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter duration"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Question Type</label>
                <select
                  name="questiontype"
                  value={formData.questiontype}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                >
                  <option value="MCQ">MCQ</option>
                  <option value="PYQ">PYQ</option>
                </select>
              </div>
              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">Question Category</label>
                <select
                  name="questioncategory"
                  value={formData.questioncategory}
                  onChange={handleSelectChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                >
                  <option value="class">Class</option>
                  <option value="exam">Exam</option>
                </select>
              </div>

              {/* Exam Selection (for exam category) */}
              {formData.questioncategory === 'exam' && (
                <>
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700">Exam Category</label>
                  
                  <select
                    name="examIds"
                    onChange={handleSelectChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Please Select</option>
                    {examModels.map((exam) => (
                      <option key={exam.id} value={exam.id}>
                        {exam.name}
                      </option>
                    ))}
                  </select>
                  
                </div>
                <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">Select Exams</label>
                <select
                  name="examitemId"
                  onChange={handleSelectChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  disabled={!formData.examIds}
                >
                  <option value="">Please Select</option>
                  {examItemModels.map((examItems) => (
                    <option key={examItems.id} value={examItems.id}>
                      {examItems.name}
                    </option>
                  ))}
                </select>
                </div>
                </>
              )}

              {/* Class, Subject, Topic, Subtopic (only if category is 'class') */}
              {formData.questioncategory === 'class' && (
                <>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">Select Class</label>
                    <select
                      name="classModelId"
                      onChange={handleSelectChange}
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Please Select</option>
                      {classModels.map((classes) => (
                        <option key={classes.id} value={classes.id}>
                          {classes.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">Select Subject</label>
                    <select
                      name="subjectId"
                      onChange={handleSelectChange}
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      disabled={!formData.classModelId}
                    >
                      <option value="">Please Select</option>
                      {subjectModels.map((subjects) => (
                        <option key={subjects.id} value={subjects.id}>
                          {subjects.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">Select Topic</label>
                    <select
                      name="topicId"
                      onChange={handleSelectChange}
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      disabled={!formData.subjectId}
                    >
                      <option value="">Please Select</option>
                      {topicModels.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                          {topic.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Select Subtopic</label>
                    <select
                      name="subtopicId"
                      onChange={handleSelectChange}
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      disabled={!formData.topicId}
                    >
                      <option value="">Please Select</option>
                      {subTopicModels.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                          {topic.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                Create Test Series
              </button>
            </form>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    </>
  );
};

export default TestseriesAdd;
