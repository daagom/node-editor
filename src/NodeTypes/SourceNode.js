import React, { memo } from "react";
import { Handle } from "reactflow";
import Node, { contentStyle as style } from "./Node";

const isValidConnection = (connection) => {
  console.log(connection.source);
  //return R.last(R.split("__", connection.target)) === "data";
};

const SourceNode = ({ data, selected }) => {
  return (
    <Node
      label={data.name}
      selected={selected}
      color={"LemonChiffon"}
      content={
        <div style={style.io}>
          {"Source"}
          <Handle
            type="source"
            position="right"
            id="o__data"
            style={{ ...style.handle, ...style.right }}
            isValidConnection={isValidConnection}
          />
        </div>
      }
    />
  );
};

export default memo(SourceNode);
