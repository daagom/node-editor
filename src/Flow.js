import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import NodeMenu from "./NodeMenu";

import SourceNode from "./NodeTypes/SourceNode";
import DataNode from "./NodeTypes/DataNode";
import FunctionNode from "./NodeTypes/FunctionNode";
import ValueNode from "./NodeTypes/ValueNode";

const nodeTypes = {
  sourceNode: SourceNode,
  dataNode: DataNode,
  functionNode: FunctionNode,
  valueNode: ValueNode,
};

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";

import { expressionNodes as verseNodes } from "./Nodes/verse-nodes";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  /*const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);*/
  const [nodes, setNodes, onNodesChange] = useNodesState(verseNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu],
  );

  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    //<div className="viewport" onContextMenu={handleContextMenu}>
    <ReactFlow
      ref={ref}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      //onContextMenu={onPaneClick}
      onNodeContextMenu={onNodeContextMenu}
      onPaneClick={onPaneClick}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
      {menu && <NodeMenu onClick={onPaneClick} {...menu} />}
    </ReactFlow>
    //</div>
  );
};

export default OverviewFlow;
