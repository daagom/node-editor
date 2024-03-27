// VariableContext.jsx
import React, { createContext, useState, useContext } from 'react';

import { registerVariableNodes, deregisterVariableNodes } from '../PopulateNodeTypes';

const VariableContext = createContext();

export function useVariables() {
  return useContext(VariableContext);
}

export const VariableProvider = ({ children }) => {
  const [variables, setVariables] = useState([]);

  const createVariable = (variable) => {
    setVariables([...variables, variable]);
    registerVariableNodes(variable);
  };

  const removeVariable = (variableId) => {
    setVariables(variables.filter(variable => variable.id !== variableId));
    deregisterVariableNodes(variableId);
  };

  const modifyVariable = (modifiedVariable) => {
    setVariables(variables.map(variable => variable.id === modifiedVariable.id ? modifiedVariable : variable));
  };

  return (
    <VariableContext.Provider value={{ variables, createVariable, removeVariable, modifyVariable }}>
      {children}
    </VariableContext.Provider>
  );
};