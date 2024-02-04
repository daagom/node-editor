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
} from "./GenerateNodesFromJson";

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
  const ref = useRef(null);

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

  return (
    <ReactFlow
      ref={ref}
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onContextMenu={handleContextMenu}
      //onNodeContextMenu={onNodeContextMenu}
      onPaneClick={closeNodeMenu}
      onConnect={onConnect}
      onInit={onInit}
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
  );
};

export default HorizontalFlow;
