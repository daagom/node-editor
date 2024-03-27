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
import GeneratedFunctionNode from "./NodeTypes/GeneratedNode";
import { getAllNodes } from "./PopulateNodeTypes";

const nodeTypes = {
  generatedFunctionNode: GeneratedFunctionNode,
};

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
    const allNodes = getAllNodes();
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

    const dataType = JSON.parse(event.dataTransfer.getData('variable'));

    console.log("variable dropped:", dataType);

    addNewNode(dataType.id+'_get')
    addNewNode(dataType.id+'_set')
  });

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
