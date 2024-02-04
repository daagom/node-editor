import React, { memo } from "react";

import { nodes as conditionals } from "./Nodes/Conditionals.js";
import { nodes as operators } from "./Nodes/Operators.js";

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
  ];
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
