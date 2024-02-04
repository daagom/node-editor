// NodeMenu.js
import React, { useState } from "react";

import {
  allCategories,
  GetNodeFromNodeType,
  GetAllNodeTypes,
} from "./GenerateNodesFromJson";

function NodeMenu({ position, onClose, onNodeSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories] = useState(allCategories);
  const allNodes = GetAllNodeTypes();

  const handleNodeClick = (nodeType) => {
    onNodeSelect(nodeType);
  };

  // Filter nodes based on search query
  const filteredNodes = allNodes.filter((node) =>
    node.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const style = {
    position: "absolute",
    top: `${position.y}px`,
    left: `${position.x}px`,
    zIndex: 1000,
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    // Additional styles
  };

  return (
    <div style={style} onMouseLeave={onClose}>
      <input
        type="text"
        placeholder="Search nodes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <strong>{category.name}</strong>
              {category.nodes.map((node, index) => (
                <div key={index} onClick={() => handleNodeClick(node.type)}>
                  {node.label}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NodeMenu;

/*
{filteredNodes.map((node, index) => (
            <div key={index} onClick={() => handleNodeClick(node)}>
              {GetNodeFromNodeType(node).label}
            </div>
          ))}
          const log_cats = () => {
            console.log("Categories", categories);
            {
              categories.map(
                (category) => (
                  console.log("Nodes per category", category),
                  category.nodes.map((node) => console.log("Node", node))
                ),
              );
            }
          };
          log_cats();
          
          */
