// PropertyPanel.js
import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import { getAllDataTypes } from "./PopulateNodeTypes"; 
import { Background } from "reactflow";
import TreeView from "./Components/TreeView.js"

function PropertyPanel({ onAddFunction, onAddVariable, show, onToggle }) {
  console.log("Log: PropertyPanel");
  // State for function form
  const [functionName, setFunctionName] = useState("");
  const [functionParams, setFunctionParams] = useState("");


  const initialTreeData = [
    {
      id: '1',
      name: 'Node 1',
      children: [
        {
          id: '1-1',
          name: 'Node 1-1',
          children: [
            {
              id: '1-1-1',
              name: 'Node 1-1-1',
            },
            {
              id: '1-1-2',
              name: 'Node 1-1-2',
            },
          ],
        },
        {
          id: '1-2',
          name: 'Node 1-2',
        },
      ],
    },
    {
      id: '2',
      name: 'Node 2',
      children: [
        {
          id: '2-1',
          name: 'Node 2-1',
        },
      ],
    },
  ];
  const [treeData, setTreeData] = useState(initialTreeData); // Initialize with your data structure



  
  

  // State for variable form
  const [variableName, setVariableName] = useState("");
  const [variableType, setVariableType] = useState("string");
  const [variableValue, setVariableValue] = useState("");
  const dataTypes = getAllDataTypes();

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
    //TODO: Add addNode logic
    addNode()
  };

  const addNewNode = (nodeType) => {
    const node_id = nanoid();
    const node_data = allNodes.filter((node) => node.type === nodeType)[0];
    console.log("addNewNode", node_data);

    const newNode = {
      id: node_id.toString(), // Unique ID for the node
      type: "generatedFunctionNode", // Type of the node
      position: { x: mousePos.x, y: mousePos.y }, // Position at cursor
      data: node_data, // Data for the node
    };
    setNodes((nodes) => nodes.concat(newNode));
  };

  const addNode = (parentNode) => {
    // Logic to add a node as a child of parentNode
    // Update treeData state with the new node
  };

  const moveNode = (draggedNode, newParentNode) => {
    // Logic to move draggedNode under newParentNode
    // Update treeData state to reflect this change
    
  };

  return (
    <div className={`property-panel ${show ? "" : "hidden"}`}>
      <div className="function-section">
        <Collapsible trigger={"Functions"} transitionTime={"50"} open={true}>
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
        </Collapsible>
      </div>

         {/* TODO: save state of trigger and add carat  */}
        <Collapsible trigger={"Variables"} transitionTime={50} open={false}>
          
      <div className="variable-section">
          <div className="property">
            <div className="property-label">Variable Name</div>
            <div className="property-input">
              <input
                type="text"
                placeholder="Variable Name"
                value={variableName}
                onChange={(e) => setVariableName(e.target.value)}
              />
            </div>
          </div>
          <div className="property">
            <div className="property-label">Variable Type</div>
            <div className="property-input">
              <select
                value={variableType}
                onChange={(e) => setVariableType(e.target.value)}
              >
                {dataTypes.map(type => (
                      <option value={type}>{type}</option>
                    ))}
              </select>
            </div>
          </div>
          <div className="property">
            <div className="property-label">Default Value</div>
            <div className="property-input">
            <input
              type="text"
              placeholder="Initial Value"
              value={variableValue}
              onChange={(e) => setVariableValue(e.target.value)}
            />
            </div>
          </div>
        
          <div className="property">
            <button onClick={handleAddVariable}>Add Variable</button>
          </div>
          <div className="variable-list">
            
          {/* TODO populate var list with created variables */}
          <TreeView data={treeData} onAddChild={addNode} onMove={moveNode} />
          </div>
        </div>
        </Collapsible>
      <button className="toggle-panel-button" onClick={onToggle}>
        {show ? "<<" : ">>"}
      </button>
    </div>
  );
}

export default PropertyPanel;
