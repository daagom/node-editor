import React, { memo } from "react";
import { nanoid } from "nanoid";

import { nodes as conditionals } from "./Nodes/Conditionals.js";
import { nodes as operators } from "./Nodes/Operators.js";

const nodeAlias = {
    id: "",
    type: "",
    label: "",
    inputs: [
      { id: "", type: "" }
    ],
    outputs: [
      { id: "", type: "" },
    ],
};

var userGenVariables = []

export function registerVariableNodes(dataType) {
  const node_data_getter = ({
    id: (dataType.id+'_get'),
    label: ('Get ' + dataType.name),
    type: (dataType.id+'_get'),
    outputs: [{ id: "result", type: dataType.type }],
  });

  const node_data_setter = ({
    id: (dataType.id+'_set'),
    label: ('Set ' + dataType.name),
    type: (dataType.id+'_set'),
    inputs: [
      { id: "flow", type: "flow"},
      { id: "value", type: dataType.type }],
    outputs: [{ id: "flow", type: "flow"}]
  });

  userGenVariables = userGenVariables.concat(node_data_getter, node_data_setter)
}

export function deregisterVariableNodes(node_id) {
  userGenVariables = userGenVariables.map(node => node.id.contains(node_id) === false )
}

export function modifyVariableNode(node_id) {
  /* TODO: update existing nodes with new names */
}

export function getAllDataTypes() {
  // TODO: add all data types from digest modules
  return [
    'logic',
    'int',
    'float',
    'string',
    'rational',
    'any',
  ]
}

export function createNewNode(nodeType) {
  for (var key in conditionals) {
    var node = conditionals[key];
  }

  return (
    <div>
      <div className="conditionals"></div>
    </div>
  );
}

export function GetAllNodeTypes() {
  var conditional_nodes = Object.keys(conditionals).map(function (key) {
    return conditionals[key].type;
  });
  var operator_nodes = Object.keys(operators).map(function (key) {
    return operators[key].type;
  });

  return conditional_nodes;
}

export function GetNodeFromNodeType(nodeType) {
  var allNodes = Object.keys(conditionals).map(function (key) {
    return conditionals[key];
  });

  return allNodes.filter((node) => node.type === nodeType)[0];
}

export function allCategories() {
  return [
    { name: "Logical Flow", nodes: conditionals },
    { name: "Operators", nodes: operators },
    { name: "Variables", nodes: userGenVariables },
  ];
}

export function getAllNodes() {
  return [...conditionals, ...operators, ...userGenVariables]
}
/*
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
  // Filter nodes based on search query
  const filteredNodes = nodes.filter((node) =>
    node.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

get all nodes in json
for each Node
    if number of inputs > 0
        create input handles
    if number of outputs > 0
        create output handles

            

window.addEventListener("DOMContentLoaded", function () {
  let displayInfo = conditionals.map(function (node) {
    return ` <div class="profile">
        <img src="${node.img}" alt="">
        <h2>${profile.name}</h2>
        <p>${profile.desc}</p>
    </div>`;
  });
  displayInfo = displayInfo.join("");
  main.innerHTML = displayInfo;
});

for (var key in dctLanguages) {
  var language = dctLanguages[key];
  strHTML +=
    '<input type="button" id="' + language.id + '" value="' + key + '"/>';
}
*/
