import React, { memo } from "react";
import { Handle } from "reactflow";
import Node, { contentStyle as style } from "./Node";

const isValidInput = (connection) => {
  console.log(connection.source);
  //return R.last(R.split("__", connection.source)) === "data";
};
const isValidOutput = (connection) => {
  console.log(connection.source);
  //return R.last(R.split("__", connection.target)) === "data";
};

const DataNode = ({ data, selected }) => {
  return (
    <Node
      label={data.name}
      selected={selected}
      color={"LightCyan"}
      content={
        <div style={style.io}>
          {!data.uploaded && (
            <Handle
              type="target"
              position="left"
              id="i__data"
              style={{ ...style.handle, ...style.left }}
              //isValidConnection={isValidInput}
            />
          )}
          {"Data"}
          <Handle
            type="source"
            position="right"
            id="o__data"
            style={{ ...style.handle, ...style.right }}
            //isValidConnection={isValidOutput}
          />
        </div>
      }
    />
  );
};

export default memo(DataNode);
