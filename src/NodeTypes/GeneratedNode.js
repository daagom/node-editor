import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Node, { contentStyle as style } from "./Node";
import { nanoid } from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/fontawesome-free";


import {dataStyles} from "./node-styles"

const isValidInput = (connection, type) => {
  return connection.sourceHandle.endsWith(type);
};
const isValidOutput = (connection, type) => {
  return connection.targetHandle.endsWith(type);
};

const GeneratedFunctionNode = ({ data, selected }) => {
  const node_id = nanoid();

  const labelStyle = (label, datatype, type) => {
    const itemCounter = (array, item) => {
      if(array?.length) {
        return array.filter((currentItem) => currentItem.id == item).length;
      }
      return 0
    };

    if(type == "input" & itemCounter(data.inputs, "flow") > 1) { return label }
    if(type == "output" & itemCounter(data.outputs, "flow") > 1) { return label }

    switch(label) {
      case "flow":
        return ""
      default:
        if(type=="input") 
          return handleWidget(label, datatype)
        else
          return label
    }
  };

  const handleWidget = (label, type) => {
    switch(type) {
      case "logic":
        return (
          <div class="input-container">
            {label} 
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </div>
        )
      case "int":
        return (
          <div>
          <input type="number" placeholder="1"/>
          </div>
        )
      case "float":
        return (
          <div>
          <input type="number" placeholder="1.0" step="0.01"/>
          </div>
        )
      case "string":
        return (
          <div>
          <input type="text"/>
          </div>
        )
      default:
        return label
    }
  };


  return (
    <Node
      label={data.label}
      selected={selected}
      color={dataStyles[data.type]}

      content={
        <>
          <div key={"i-" + node_id} className="inputs">
          {data.inputs?.map(input => (
            <div
              key={"i-" + input.id}
              className="handle"
              //style={{ ...style.io, ...style.textLeft }}
            >
              <div className="left-text">
              {labelStyle(input.id, input.type, "input")}
              </div>
              
              <Handle
                type="target"
                position={Position.Left}
                id={input.id + "___" + input.type}
                style={{ ...dataStyles[input.type] }}
                //style={{ ...style.handle, ...style.left, ...dataStyles[input.type] }}
                isValidConnection={(connection) =>
                  isValidInput(connection, input.type)
                }
              />
            </div>
          ))}
          </div>
          <div key={"0-" + node_id} class="outputs">
          {data.outputs?.map(output => (
            <div
              key={"o-" + output.id}
              className="handle"
              //style={{ ...style.io, ...style.textRight }}
            >
              <div className="right-text">
              {labelStyle(output.id, "output")}
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id={output.id + "___" + output.type}
                style={{ ...dataStyles[output.type] }}
                isValidConnection={(connection) =>
                  isValidOutput(connection, output.type)
                }
              />
            </div>
          ))}
          </div>
        </>
      }
    />
  );
};

export default memo(GeneratedFunctionNode);
