import React, { useState } from "react";

//import FlowExample from "./FlowExample";
import Flow from "./FlowVerse";
//import Flow from "./TestFlow";
//import FlowCopy from "./FlowCopy";
import PropertyPanel from "./PropertyPanel";
import "reactflow/dist/style.css";
import "./styles.css";

export default function App() {
  const [showPropertyPanel, setShowPropertyPanel] = useState(false);

  const togglePropertyPanel = () => {
    setShowPropertyPanel(!showPropertyPanel);
  };

  return (
    <div className="App">
      <Flow />
      <PropertyPanel show={showPropertyPanel} onToggle={togglePropertyPanel} />
    </div>
  );
}
