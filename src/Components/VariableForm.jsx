// VariableForm.jsx
import React, { useState } from 'react';
import { useVariables } from '../Contexts/VariableContext';
import { getAllDataTypes, registerVariableNodes, deregisterVariableNodes } from '../PopulateNodeTypes';

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

  const dataTypes = getAllDataTypes()

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
        {dataTypes.map(type => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.substring(1)}</option>
        ))}
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
