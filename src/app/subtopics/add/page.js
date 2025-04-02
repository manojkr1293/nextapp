'use client'
import AdminLayout from "@/app/component/Layout/AdminLayout";
import ProtectedRoute from "@/app/component/ProtectedRoute";
import { classModelActions } from "@/store/slices/classModelSlice";
import { subjectModelActions } from "@/store/slices/subjectModelSlice";
import { subTopicSliceActions } from "@/store/slices/subTopicSlice";
import { topicModelActions } from "@/store/slices/topicModelSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddSubTopics = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [classId, setClassId] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [topicId, setTopicId] = useState('');
  
  const dispatch = useDispatch();
  const { classModels } = useSelector((state) => state.classModel);
  const { subjectModels } = useSelector((state) => state.subjectModel);
  const { topicModels } = useSelector((state) => state.topicModel);

  // Fetch all class models when the component mounts
  useEffect(() => {
    dispatch(classModelActions.fetchAllClassModelsSlice());
  }, [dispatch]);

  // Fetch subjects when classId changes
  useEffect(() => {
    if (classId) {
      dispatch(subjectModelActions.fetchSubjectOnClassIdSlice(classId));
      setSubjectId(''); // Reset subjectId when classId changes
      setTopicId(''); // Reset topicId when classId changes
    } else {
      setSubjectId(''); // Reset subject if no class is selected
      setTopicId(''); // Reset topic if no class is selected
    }
  }, [dispatch, classId]);

  // Fetch topics when subjectId changes
  useEffect(() => {
    if (subjectId) {
      dispatch(topicModelActions.fetchAllTopicOnSubjectIdSlice(subjectId));
      setTopicId(''); // Reset topicId when subject changes
    } else {
      setTopicId(''); // Reset topicId if no subject is selected
    }
  }, [dispatch, subjectId]);

  // Handle class change
  const handleClassChange = (e) => {
    setClassId(e.target.value);
  };

  // Handle subject change
  const handleSubjectChange = (e) => {
    setSubjectId(e.target.value);
  };

  // Handle topic change
  const handleTopicChange = (e) => {
    setTopicId(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const subtopicsPayload = {
      name, description, classId, subjectId, topicId
    };
    console.log({ name, description, classId, subjectId, topicId });
    dispatch(subTopicSliceActions.createSubtopicSlice({ subtopics: [subtopicsPayload] }))
    
  };

  return (
    <>
      <ProtectedRoute roleRequired={'ADMIN'}>
        <AdminLayout>
          <div className="max-w-7xl mx-auto bg-white p-5 rounded-xl shadow-xl border-slate-600">
            <h1 className="text-2xl font-semibold mb-10">Add Sub-Topic</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xl text-black font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 block rounded-md bg-gray-100 border-gray-300 text-black w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl text-black font-semibold">Description</label>
                <textarea
                  rows={4}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 block rounded-md bg-gray-100 border-gray-300 text-black w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-xl text-black">Select Class</label>
                <select
                  name="classId"
                  onChange={handleClassChange}
                  className="p-2 w-full block bg-gray-100"
                >
                  <option value="">Please Select</option>
                  {classModels.map((classes) => (
                    <option key={classes.id} value={classes.id}>
                      {classes.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-xl text-black">Select Subject</label>
                <select
                  name="subjectId"
                  onChange={handleSubjectChange}
                  className="p-2 w-full block bg-gray-100"
                  disabled={!classId} // Disable subject dropdown if no class selected
                >
                  <option value="">Please Select</option>
                  {subjectModels.map((subjects) => (
                    <option key={subjects.id} value={subjects.id}>
                      {subjects.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-xl text-black">Select Topic</label>
                <select
                  name="topicId"
                  onChange={handleTopicChange}
                  className="p-2 w-full block bg-gray-100"
                  disabled={!subjectId} // Disable topic dropdown if no subject selected
                >
                  <option value="">Please Select</option>
                  {topicModels.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-700 text-gray-100 font-semibold px-5 py-2"
                  disabled={!topicId} // Disable submit if no topic selected
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    </>
  );
};

export default AddSubTopics;
