import React, { useCallback, useRef, useState, useEffect } from "react";

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { nanoid } from "nanoid";

// Components
import NodeMenu from "./NodeMenu";

import SourceNode from "./NodeTypes/SourceNode";
import DataNode from "./NodeTypes/DataNode";
import FunctionNode from "./NodeTypes/FunctionNode";
import ValueNode from "./NodeTypes/ValueNode";
import GeneratedFunctionNode from "./NodeTypes/GeneratedNode";
import {
  allCategories,
  GetNodeFromNodeType,
  GetAllNodeTypes,
  getAllNodes,
} from "./PopulateNodeTypes";

const nodeTypes = {
  sourceNode: SourceNode,
  dataNode: DataNode,
  functionNode: FunctionNode,
  valueNode: ValueNode,
  generatedFunctionNode: GeneratedFunctionNode,
};

import { nodes as conditionals } from "./Nodes/Conditionals.js";
import { nodes as operators } from "./Nodes/Operators.js";




const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const allNodes = getAllNodes();

const HorizontalFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const [nodeMenuPosition, setNodeMenuPosition] = useState({ x: 0, y: 0 });
  const [showNodeMenu, setShowNodeMenu] = useState(false);

  const handleContextMenu = useCallback((event) => {
    console.log("Context Menu Opened");
    event.preventDefault();
    setNodeMenuPosition({ x: event.pageX, y: event.pageY });
    setShowNodeMenu(true);
  });

  const closeNodeMenu = () => {
    setShowNodeMenu(false);
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
    closeNodeMenu();
  };

  // Handlers for drag & drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // TODO: update to support Getters and Setters
  const onDrop = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const dataType = JSON.parse(event.dataTransfer.getData('variable'));

    console.log("variable dropped:", dataType);

    // Calculate position of the new node
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const node_data_getter = ({
      id: (dataType.id+'_get'),
      label: ('Get ' + dataType.name),
      type: dataType.type,
      outputs: [{ id: "result", type: dataType.type }],
    });

    const node_data_setter = ({
      id: (dataType.id+'_set'),
      label: ('Set ' + dataType.name),
      type: dataType.type,
      inputs: [
        { id: "flow", type: "flow"},
        { id: "value", type: dataType.type }],
      outputs: [{ id: "flow", type: "flow"}]
    });

    console.log("variable dropped:", node_data_getter);
    console.log("variable dropped:", node_data_setter);
    /* 
          TODO: update to use the above newNode function.
          Generate correct node_data to pass 
            {
    id: "ifElseNode",
    type: "ifElse",
    label: "If-Else Condition",
    inputs: [{ id: "cond", type: "boolean" }],
    outputs: [
      { id: "then", type: "flow" },
      { id: "else", type: "flow" },
    ],
  },
    */
    // Generate a new node
    const get_node = {
      id: nanoid(),
      type: 'generatedFunctionNode', // Assuming you want this type, change as needed
      position: position,
      data: node_data_getter,
    };
    const set_node = {
      id: nanoid(),
      type: 'generatedFunctionNode', // Assuming you want this type, change as needed
      position: position,
      data: node_data_setter,
    };

    
    setNodes((nodes) => nodes.concat(get_node));
    setNodes((nodes) => nodes.concat(set_node));
  }, [reactFlowInstance, setNodes]);

  return (

    <div ref={reactFlowWrapper} style={{ height: "100%" }}>
    <ReactFlow
      //ref={ref}
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onContextMenu={handleContextMenu}
      //onNodeContextMenu={onNodeContextMenu}
      onPaneClick={closeNodeMenu}
      onConnect={onConnect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onInit={setReactFlowInstance}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap
        nodeColor={(node) => {
          switch (node.type) {
            case "valueNode":
              return "LightGreen";
            case "dataNode":
              return "LightBlue";
            case "functionNode":
              return "Lavender";
            case "sourceNode":
              return "Gold";
            default:
              return "#eee";
          }
        }}
      />
      <Controls />
      <Background id={1} color="#2c2c2c" gap={10} lineWidth={1} variant="Lines" />
      <Background id={2} color="#0c0c0c" gap={100} lineWidth={1} variant="Lines" />
      {showNodeMenu && (
        <NodeMenu
          position={nodeMenuPosition}
          onClose={closeNodeMenu}
          onNodeSelect={addNewNode}
        />
      )}
    </ReactFlow>
    </div>
  );
};

export default HorizontalFlow;
