'use client'
import React, { useState } from 'react';
import QuillEditor from '../component/QuillEditor';
const FormWithQuill = () => {
  const [editorContent, setEditorContent] = useState(''); // This will store the editor content
  const [formData, setFormData] = useState({}); // Store form data

  // Handle content change in the editor
  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, content: editorContent };

    // Example of submitting form data
    console.log('Form Data:', dataToSubmit);

    // You can submit the data using Axios, fetch, or any other method here
    // For example:
    // axios.post('/submit', dataToSubmit).then(response => console.log(response));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="editorContent" className="block text-lg font-semibold">Editor Content</label>
        <QuillEditor value={editorContent} onChange={handleEditorChange} />
      </div>

      {/* Other form fields */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-lg font-semibold">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full p-2 border rounded-md"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default FormWithQuill;
