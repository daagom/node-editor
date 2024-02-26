import React, { useState } from 'react';

function TreeNode({ node, onAddChild, onMove }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNode = () => setIsExpanded(!isExpanded);

  // Drag handlers
  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/node', JSON.stringify(node));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('application/node'));
    onMove(data, node); // Pass the dragged node and new parent node
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={toggleNode}
      >
        {node.name} {isExpanded ? '-' : '+'}
      </div>
      {/* TODO: Add logic to not allow expanding childless elements */}
      {isExpanded && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onAddChild={onAddChild} onMove={onMove} />
          ))}
        </div>
      )}
    </>
  );
}

export default function TreeView({ data, onAddChild, onMove }) {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} onAddChild={onAddChild} onMove={onMove} />
      ))}
    </div>
  );
}
