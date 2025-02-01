import React, { useState } from 'react';

const BusinessInfo = () => {
  const [businessName, setBusinessName] = useState('');

  const handleSave = () => {
    // Placeholder for save logic
    alert('Business information saved!');
  };

  return (
    <div>
      <h2>Business Information</h2>
      <div>
        <label>Business Name:</label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BusinessInfo;
