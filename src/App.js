import React, { useState } from "react";

import Flow from "./FlowVerse";
import PropertyPanel from "./PropertyPanel";
import { VariableProvider } from './Contexts/VariableContext';

import "reactflow/dist/style.css";
import "./styles.css";

export default function App() {
  const [showPropertyPanel, setShowPropertyPanel] = useState(false);

  const togglePropertyPanel = () => {
    setShowPropertyPanel(!showPropertyPanel);
  };

  return (
    <div className="App">
      <VariableProvider>
        <Flow />
        <PropertyPanel show={showPropertyPanel} onToggle={togglePropertyPanel} />
      </VariableProvider>
    </div>
  );
}
