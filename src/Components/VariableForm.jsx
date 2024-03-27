// VariableForm.jsx
import React, { useState } from 'react';
import { useVariables } from '../Contexts/VariableContext';

function VariableForm() {
  const [variableName, setVariableName] = useState('');
  const [variableType, setVariableType] = useState('string');
  const [variableValue, setVariableValue] = useState('');
  const { createVariable } = useVariables();

  const handleAddVariable = () => {
    createVariable({
      id: Date.now().toString(),
      name: variableName,
      type: variableType,
      value: variableValue,
    });
    setVariableName('');
    setVariableType('string');
    setVariableValue('');
  };

  return (
    <div className="variable-form">
      <input
        type="text"
        placeholder="Variable Name"
        value={variableName}
        onChange={(e) => setVariableName(e.target.value)}
      />
      <select
        value={variableType}
        onChange={(e) => setVariableType(e.target.value)}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        {/* Add more types as needed */}
      </select>
      <input
        type="text"
        placeholder="Initial Value"
        value={variableValue}
        onChange={(e) => setVariableValue(e.target.value)}
      />
      <button onClick={handleAddVariable}>Add Variable</button>
    </div>
  );
}

export default VariableForm;
