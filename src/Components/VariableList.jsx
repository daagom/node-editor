// VariableList.jsx
import React, { useState } from 'react';
import { useVariables } from '../Contexts/VariableContext';

function VariableList() {
  const { variables, modifyVariable, removeVariable } = useVariables();
  const [editableVariableId, setEditableVariableId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleDoubleClick = (variable) => {
    setEditableVariableId(variable.id);
    setEditedName(variable.name);
  };

  const handleDragStart = (event, variable) => {
    event.dataTransfer.setData('variable', JSON.stringify(variable));
    event.dataTransfer.effectAllowed = 'move';
    console.log("variable dragged:", variable);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleKeyDown = (event, variable) => {
    if (event.key === 'Enter') {
      modifyVariable({ ...variable, name: editedName });
      setEditableVariableId(null);
    } else if (event.key === 'Delete') {
      removeVariable(variable.id);
    }
  };

  return (
    <div className="variable-list">
      {variables.map(variable => (
        <div 
            key={variable.id} 
            onDoubleClick={() => handleDoubleClick(variable)} 
            onKeyDown={(e) => handleKeyDown(e, variable)} 
            draggable="true"
            onDragStart={(e) => handleDragStart(e, variable)}
            tabIndex={0}
        >
          {editableVariableId === variable.id ? (
            <input
              type="text"
              value={editedName}
              onChange={handleNameChange}
              onKeyDown={(e) => handleKeyDown(e, variable)}
              autoFocus
            />
          ) : (
            <span>{variable.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default VariableList;
