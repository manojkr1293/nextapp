"use client";
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { examModelActions } from "@/store/slices/examSlice";
import { questionActions } from "@/store/slices/questionSlice";
import { subjectModelActions } from "@/store/slices/subjectModelSlice";
import { subTopicSliceActions } from "@/store/slices/subTopicSlice";
import { topicModelActions } from "@/store/slices/topicModelSlice";
//import QuillEditor from '@/app/component/QuillEditor';
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const QuillEditor = dynamic(() => import("../../component/QuillEditor"), {
  ssr: false,
});

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { examItemModelActions } from "@/store/slices/examItemSlice";
import { useRouter } from "next/navigation";

export default function AddQuestion() {
  const { classModels } = useSelector((state) => state.classModel);
  const { subjectModels } = useSelector((state) => state.subjectModel);
  const { topicModels } = useSelector((state) => state.topicModel);
  const { subTopicModels } = useSelector((state) => state.subTopicModel);
  const { examModels } = useSelector((state) => state.examModel); // Assuming exams are fetched from the store
  const { examItemModels } = useSelector((state) => state.examItemModel);
  const [selectedYears, setSelectedYears] = useState([]);
  const router = useRouter();

  // Generate a list of years from 2000 to 2024
  const years = [];
  for (let i = 2000; i <= 2024; i++) {
    years.push(i);
  }
  //const []
  const [formData, setFormData] = useState({
    questiontext: "",
    options: [""],
    correctanswer: "",
    marks: "",
    pyqyears: [],
    questiontype: "MCQ",
    difficultylevel: "Medium",
    testseriesId: "",
    questioncategory: "exam",
    examIds: "",
    examitemId: "",
    solution: "", // Added field for solution
    classModelId: "",
    subjectId: "",
    topicId: "",
    subtopicId: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(classModelActions.fetchAllClassModelsSlice());
    dispatch(examModelActions.fetchAllExamModelsSlice()); // Fetch exams when the component mounts
  }, [dispatch]);

  useEffect(() => {
    if (formData.examIds) {
      dispatch(
        examItemModelActions.fetchexamItemOnExamIdSlice(formData.examIds)
      );
      setFormData((prevData) => ({
        ...prevData,
        examitemId: "",
      }));
    }
  }, [dispatch, formData.examIds]);

  useEffect(() => {
    if (formData.classModelId) {
      dispatch(
        subjectModelActions.fetchSubjectOnClassIdSlice(formData.classModelId)
      );
      setFormData((prevData) => ({
        ...prevData,
        subjectId: "", // Reset subject when class changes
        topicId: "", // Reset topic when class changes
        subtopicId: "",
      }));
    }
  }, [dispatch, formData.classModelId]);

  useEffect(() => {
    if (formData.subjectId) {
      dispatch(
        topicModelActions.fetchAllTopicOnSubjectIdSlice(formData.subjectId)
      );
      setFormData((prevData) => ({
        ...prevData,
        topicId: "", // Reset topic when class changes
        subtopicId: "",
      }));
    }
  }, [dispatch, formData.subjectId]);

  useEffect(() => {
    if (formData.topicId) {
      dispatch(
        subTopicSliceActions.fetchAllSubTopicOnTopicIdSlice(formData.topicId)
      );
      setFormData((prevData) => ({
        ...prevData,
        subtopicId: "",
      }));
    }
  }, [dispatch, formData.topicId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Dynamic handler for all QuillEditors
  const handleEditorChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      options: updatedOptions,
    }));
  };

  // Add a new option dynamically
  const handleAddOption = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      options: [...prevFormData.options, ""],
    }));
  };

  // Remove an option
  const handleRemoveOption = (index) => {
    const updatedOptions = formData.options.filter((_, i) => i !== index);
    setFormData((prevFormData) => ({
      ...prevFormData,
      options: updatedOptions,
    }));
  };

  const handleYearCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add the year to the selectedYears array if checked
      setSelectedYears((prev) => [...prev, value]);
    } else {
      // Remove the year from the selectedYears array if unchecked
      setSelectedYears((prev) => prev.filter((year) => year !== value));
    }

    setFormData((prevState) => ({
      ...prevState,
      pyqyears: checked
        ? [...prevState.pyqyears, value] // Add the exam to exams array
        : prevState.pyqyears.filter((year) => year !== value),
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log("formData", formData); // Log formData whenever it changes
  }, [formData]);

  const handleSubmit = async (e) => {
    const {
      questiontext,
      options,
      correctanswer,
      marks,
      questiontype,
      questioncategory,
      pyqyears,
      difficultylevel,
      testseriesId,
      solution,
      examIds,
      examitemId,
      classModelId,
      subjectId,
      topicId,
      subtopicId,
    } = formData;

    let marksInt = parseInt(marks, 10);
    if (isNaN(marksInt)) {
      alert("Invalid marks value. It should be a valid number.");
      return;
    }

    const questionPayload = {
      questiontext,
      options,
      correctanswer,
      marks: marksInt,
      questiontype,
      questioncategory,
      years: pyqyears,
      difficultylevel,
      examIds,
      examitemId,
      solution, // Add solution field
      classModelId,
      subjectId,
      topicId,
      subtopicId,
      testseriesId,
    };
    console.log(questionPayload);
    e.preventDefault();
    dispatch(
      questionActions.createQuestionSlice({ questions: [questionPayload] })
    );
    router.push("/questions");
    //alert('Question added successfully!');
    /* setFormData({
      questiontext: '',
      options: ['', '', '', ''],
      correctanswer: '',
      marks: '',
      questiontype: 'MCQ',
      difficultylevel: 'Medium',
      classModelId: '',
      examId: '',
      solution: '', // Reset solution
    });*/
  };

  return (
    <ProtectedRoute roleRequired={"ADMIN"}>
      <AdminLayout>
        <div className="flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Add a New Question
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Question Text */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Question
                </label>
                <QuillEditor
                  value={formData.questiontext}
                  onChange={(value) =>
                    handleEditorChange("questiontext", value)
                  }
                />
              </div>

              {/* Options */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Options
                </label>
                {formData.options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <QuillEditor
                      value={option}
                      onChange={(value) => handleOptionChange(index, value)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove Option
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="p-2 bg-green-500 text-white rounded-md mt-2"
                >
                  Add Option
                </button>
              </div>

              {/* Correct Answer */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Correct Answer
                </label>

                <QuillEditor
                  value={formData.correctanswer}
                  onChange={(value) =>
                    handleEditorChange("correctanswer", value)
                  }
                />
              </div>

              {/* Marks and Question Type */}
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Marks
                  </label>
                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Marks"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Question Type
                  </label>
                  <select
                    name="questiontype"
                    value={formData.questiontype}
                    onChange={handleSelectChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  >
                    <option value="MCQ">MCQ</option>
                    <option value="PYQ">PYQ</option>
                  </select>
                </div>
              </div>

              {/* Years Selection (for PYQ type) */}
              {formData.questiontype === "PYQ" && (
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">
                    Select Years
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {years.map((year) => (
                      <label key={year} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value={year}
                          checked={selectedYears.includes(year.toString())}
                          onChange={handleYearCheckboxChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Difficulty Level
                </label>
                <select
                  name="difficultylevel"
                  value={formData.difficultylevel}
                  onChange={handleSelectChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Question Category
                </label>
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
              {formData.questioncategory === "exam" && (
                <>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">
                      Exams Category
                    </label>

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
                    <label className="block text-lg font-medium text-gray-700">
                      Select Exams
                    </label>
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
              {formData.questioncategory === "class" && (
                <>
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">
                      Select Class
                    </label>
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
                    <label className="block text-lg font-medium text-gray-700">
                      Select Subject
                    </label>
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
                    <label className="block text-lg font-medium text-gray-700">
                      Select Topic
                    </label>
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
                    <label className="block text-lg font-medium text-gray-700">
                      Select Subtopic
                    </label>
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

              {/* Solution Text Area */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Solution
                </label>

                <QuillEditor
                  value={formData.solution}
                  onChange={(value) => handleEditorChange("solution", value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 sm:p-2 rounded-md hover:bg-blue-600"
              >
                Add Question
              </button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
