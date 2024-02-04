import React, { memo } from "react";


export const contentStyle = {
  contentHeader: {
    padding: "8px 0px",
    flexGrow: 1,
    backgroundColor: "#445F3F",
  },
  io: {
    position: "relative",
    padding: "8px 16px",
    flexGrow: 0.5
  },
  inputs: {
    float: "left",
    padding: "8px 16px",
    flexGrow: 0.5,
    //width: "50%",
    //top: "0px"
  },
  outputs: {
    float: "right",
    padding: "8px 16px",
    flexGrow: .5,
    //width: "50%",
    //top: "0px"
  },
  left: { left: "-8px" },
  textLeft: { textAlign: "left", height: "16px" },
  right: { right: "-8px" },
  textRight: { textAlign: "right", height: "16px" },
  handle: {
    width: "10px", // Does not work
    height: "10px",
    margin: "auto",
    background: "#1a1a1a",
    borderRadius: "15px",
    border: "2px solid #ddd",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
  },
};

const style = {
  body: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2A2A2A",
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    border: "0px solid #bbb",
    borderRadius: "3px",
    fontSize: "10pt",
    color: "#B8B8B8",
  },
  selected: {
    boxShadow: "0 6px 12px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  title: {
    position: "relative",
    padding: "4px 32px",
    flexGrow: 1,
    background: "linear-gradient(to right, #445F3F, #2C3D29)",
    borderTopRightRadius: "3px",
    borderTopLeftRadius: "3px",
  },
  contentWrapper: {
    padding: "8px 0px",
    width: "100%"
  },
};


const Node = ({
  label,
  selected,
  color,
  content,
}) => {
  let customTitle = { ...style.title };
  //if (color) customTitle.backgroundColor = color;

  // Collapse contentWrapper on icon click
  return (
    <div style={{ ...style.body, ...(selected ? style.selected : []) }}>
      <div style={customTitle}>{label}</div>
      <div style={style.contentWrapper}>{content}</div>
    </div>
  );
};

export default memo(Node);
