import React, { memo } from "react";
import { Handle } from "reactflow";
import Node, { contentStyle as style } from "./Node";
import { nanoid } from "nanoid";

const isValidInput = (connection, type) => {
  console.log(connection.source);
  return connection.source === type;
};
const isValidOutput = (connection, type) => {
  console.log(connection.source);
  return connection.target === type;
};

const GeneratedFunctionNode = ({ data, selected }) => {
  const node_id = nanoid();
  console.log("GeneratedFunctionNode", data);

  return (
    <Node
      label={data.label}
      selected={selected}
      color={(data) => {
        switch (data.type) {
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
      content={
        <>
          <div style={style.contentHeader}>{"Inputs"}</div>
          {data.inputs.map((input) => (
            <div
              key={"i-" + input.id}
              style={{ ...style.io, ...style.textLeft }}
            >
              {input.id}
              <Handle
                type="target"
                position="left"
                id={"i-" + input.id}
                style={{ ...style.handle, ...style.left }}
                isValidConnection={(connection) =>
                  isValidInput(connection, input.type)
                }
              />
            </div>
          ))}
          <div style={style.contentHeader}>{"Outputs"}</div>
          {data.outputs.map((output) => (
            <div
              key={"o-" + output.id}
              style={{ ...style.io, ...style.textRight }}
            >
              {output.id}
              <Handle
                type="source"
                position="right"
                id={"o-" + output.id + "__" + output.type}
                style={{ ...style.handle, ...style.right }}
                isValidConnection={(connection) =>
                  isValidOutput(connection, output.type)
                }
              />
            </div>
          ))}
        </>
      }
    />
  );
};

export default memo(GeneratedFunctionNode);

function createHierarchicalScrollList(items) {
  // Create a list element.
  const list = document.createElement("ul");

  // Iterate over the items and create a list item for each one.
  for (const item of items) {
    const listItem = document.createElement("li");

    // If the item has children, create a nested scroll list for them.
    if (item.children) {
      listItem.appendChild(createHierarchicalScrollList(item.children));
    } else {
      // If the item does not have children, create a text node for it.
      listItem.appendChild(document.createTextNode(item.text));
    }

    // Append the list item to the list.
    list.appendChild(listItem);
  }

  // Return the list element.
  return list;
}
