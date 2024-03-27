// PropertyPanel.jsx
import React from 'react';
import FunctionForm from './Components/FunctionForm';
import VariableForm from './Components/VariableForm';
import VariableList from './Components/VariableList';
import Collapsible from 'react-collapsible';

function PropertyPanel({ onAddFunction, show, onToggle }) {
  return (
    <div className={`property-panel ${show ? "" : "hidden"}`}>
      {/* Function Section */}
      <Collapsible trigger="Functions" transitionTime={200}>
        <FunctionForm onAddFunction={onAddFunction} />
      </Collapsible>

      {/* Variable Section */}
      <Collapsible trigger="Variables" transitionTime={200}>
        <VariableForm />
        <VariableList />
      </Collapsible>

      {/* Toggle Panel Button */}
      <button className="toggle-panel-button" onClick={onToggle}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PropertyPanel;
