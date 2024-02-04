// PropertyPanel.js
import React, { useState } from "react";

function PropertyPanel({ onAddFunction, onAddVariable, show, onToggle }) {
  console.log("Log: PropertyPanel");
  // State for function form
  const [functionName, setFunctionName] = useState("");
  const [functionParams, setFunctionParams] = useState("");

  // State for variable form
  const [variableName, setVariableName] = useState("");
  const [variableType, setVariableType] = useState("string");
  const [variableValue, setVariableValue] = useState("");

  const handleAddFunction = () => {
    onAddFunction({ name: functionName, params: functionParams });
    setFunctionName("");
    setFunctionParams("");
  };

  const handleAddVariable = () => {
    onAddVariable({
      name: variableName,
      type: variableType,
      value: variableValue,
    });
    setVariableName("");
    setVariableType("string");
    setVariableValue("");
  };

  return (
    <div className={`property-panel ${show ? "" : "hidden"}`}>
      <div className="function-section">
        <h3>Create Function</h3>
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

      <div className="variable-section">
        <h3>Create Variable</h3>
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
      <button className="toggle-panel-button" onClick={onToggle}>
        {show ? "<<" : ">>"}
      </button>
    </div>
  );
}

export default PropertyPanel;
