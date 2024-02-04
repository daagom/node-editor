import React, { memo } from "react";
import { Handle, useReactFlow } from "reactflow";
import Node, { contentStyle as style } from "./Node";

const isValidInput = (connection) => {
  //return node.type === "DataNode";
  console.log(connection.sourceHandle);
  //return R.last(R.split("__", connection.sourceHandle)) === "value";
};
const isValidOutput = (connection) => {
  //return node.type === "DataNode";
  console.log(connection.targetHandle);
  //return R.last(R.split("__", connection.targetHandle)) === "value";
};

const ValueNode = ({ data, selected }) => {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const node = getNode(data);
  return (
    <Node
      label={data.name}
      color={"#E0FFE0"}
      selected={selected}
      content={
        <div style={style.io}>
          {"= " + data.value}
          <Handle
            type="target"
            position="left"
            id="i__value"
            style={{ ...style.handle, ...style.left }}
            isValidConnection={isValidInput}

            //isValidConnection={(connection) => connection.source === source}
          />
          <Handle
            type="source"
            position="right"
            id="o__value"
            style={{ ...style.handle, ...style.right }}
            isValidConnection={isValidOutput}

            //isValidConnection={(connection) => connection.source === source}
          />
        </div>
      }
    />
  );
};

export default memo(ValueNode);
