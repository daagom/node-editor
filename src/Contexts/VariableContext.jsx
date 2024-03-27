// VariableContext.jsx
import React, { createContext, useState, useContext } from 'react';

const VariableContext = createContext();

export function useVariables() {
  return useContext(VariableContext);
}

export const VariableProvider = ({ children }) => {
  const [variables, setVariables] = useState([]);

  const createVariable = (variable) => {
    setVariables([...variables, variable]);
  };

  const removeVariable = (variableId) => {
    setVariables(variables.filter(variable => variable.id !== variableId));
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