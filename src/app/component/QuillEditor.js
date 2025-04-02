'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles
import axios from 'axios';

const QuillEditor = ({ name,value, onChange }) => {
  // Handle image upload manually
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Get the image URL from the server response
      const imageUrl = response.data.url;

      // Insert the image into the editor at the current cursor position
      const editor = quillRef.current.getEditor(); // Get the Quill instance
      const range = editor.getSelection(); // Get the current cursor position
      editor.insertEmbed(range.index, 'image', imageUrl); // Insert image
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Define the Quill modules for toolbar and image handling
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' },{ 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean']
    ]
  };

  // Create a ref for Quill to access the instance
  const quillRef = React.useRef();

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-300">
      <ReactQuill
        ref={quillRef}
        name={name}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={['header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link', 'image', 'align']}
      />
    </div>
  );
};

export default QuillEditor;
