// FunctionForm.jsx
import React, { useState } from 'react';

function FunctionForm({ onAddFunction }) {
  const [functionName, setFunctionName] = useState('');
  const [functionParams, setFunctionParams] = useState('');

  const handleAddFunction = () => {
    onAddFunction({
      name: functionName,
      params: functionParams.split(',').map(param => param.trim()), // Splitting by comma for multiple parameters
    });
    setFunctionName('');
    setFunctionParams('');
  };

  return (
    <div className="function-form">
      <input
        type="text"
        placeholder="Function Name"
        value={functionName}
        onChange={(e) => setFunctionName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Parameters (comma-separated)"
        value={functionParams}
        onChange={(e) => setFunctionParams(e.target.value)}
      />
      <button onClick={handleAddFunction}>Add Function</button>
    </div>
  );
}

export default FunctionForm;
