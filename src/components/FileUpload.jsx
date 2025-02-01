import React, { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    // Placeholder for upload logic
    alert('Files uploaded!');
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
