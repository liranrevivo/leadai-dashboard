import React, { useState } from 'react';

const AIInstructions = () => {
  const [instructions, setInstructions] = useState('');

  const handleSave = () => {
    // Placeholder for save logic
    alert('AI instructions saved!');
  };

  return (
    <div>
      <h2>AI Instructions</h2>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        rows="4"
        cols="50"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AIInstructions;
