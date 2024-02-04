export const nodes = [
      // Query Operator
      {
        id: "queryOperator",
        type: "query",
        label: "Query Operator",
        inputs: [{ id: "operand", type: "logic" }],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "postfix"
      },
      // Not Operator
      {
        id: "notOperator",
        type: "not",
        label: "Not Operator",
        inputs: [{ id: "operand", type: "logic" }],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "prefix"
      },
      // Positive Operator
      {
        id: "positiveOperator",
        type: "positive",
        label: "Positive Operator",
        inputs: [{ id: "number", type: "number" }],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "prefix"
      },
      // Negative Operator
      {
        id: "negativeOperator",
        type: "negative",
        label: "Negative Operator",
        inputs: [{ id: "number", type: "number" }],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "prefix"
      },
      // Multiplication Operator
      {
        id: "multiplicationOperator",
        type: "multiplication",
        label: "Multiplication Operator",
        inputs: [
          { id: "operand1", type: "number" },
          { id: "operand2", type: "number" }
        ],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "infix"
      },
      // Division Operator
      {
        id: "divisionOperator",
        type: "division",
        label: "Division Operator",
        inputs: [
          { id: "operand1", type: "number" },
          { id: "operand2", type: "number" }
        ],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "infix"
      },
      // Addition Operator
      {
        id: "additionOperator",
        type: "addition",
        label: "Addition Operator",
        inputs: [
          { id: "operand1", type: "number" },
          { id: "operand2", type: "number" }
        ],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "infix"
      },
      // Subtraction Operator
      {
        id: "subtractionOperator",
        type: "subtraction",
        label: "Subtraction Operator",
        inputs: [
          { id: "operand1", type: "number" },
          { id: "operand2", type: "number" }
        ],
        outputs: [{ id: "result", type: "number" }],
        operatorFormat: "infix"
      },
      // Addition Assignment Operator
      {
        id: "additionAssignmentOperator",
        type: "additionAssignment",
        label: "Addition Assignment Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "number" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      },
      // Subtraction Assignment Operator
      {
        id: "subtractionAssignmentOperator",
        type: "subtractionAssignment",
        label: "Subtraction Assignment Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "number" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      },
      // Multiplication Assignment Operator
      {
        id: "multiplicationAssignmentOperator",
        type: "multiplicationAssignment",
        label: "Multiplication Assignment Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "number" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      },
      // Division Assignment Operator
      {
        id: "divisionAssignmentOperator",
        type: "divisionAssignment",
        label: "Division Assignment Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "number" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      },
      // Equal To Operator
      {
        id: "equalToOperator",
        type: "equalTo",
        label: "Equal To Operator",
        inputs: [
          { id: "operand1", type: "any" },
          { id: "operand2", type: "any" }
        ],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "infix"
      },
      // Not Equal To Operator
      {
        id: "notEqualToOperator",
        type: "notEqualTo",
        label: "Not Equal To Operator",
        inputs: [
          { id: "operand1", type: "any" },
          { id: "operand2", type: "any" }
        ],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "infix"
      },
      // And Operator
      {
        id: "andOperator",
        type: "and",
        label: "And Operator",
        inputs: [
          { id: "operand1", type: "logic" },
          { id: "operand2", type: "logic" }
        ],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "infix"
      },
      // Or Operator
      {
        id: "orOperator",
        type: "or",
        label: "Or Operator",
        inputs: [
          { id: "operand1", type: "logic" },
          { id: "operand2", type: "logic" }
        ],
        outputs: [{ id: "result", type: "logic" }],
        operatorFormat: "infix"
      },
      // Variable Initialization Operator
      {
        id: "variableInitializationOperator",
        type: "variableInitialization",
        label: "Variable Initialization Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "any" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      },
      // Variable Assignment Operator
      {
        id: "variableAssignmentOperator",
        type: "variableAssignment",
        label: "Variable Assignment Operator",
        inputs: [
          { id: "variable", type: "variable" },
          { id: "value", type: "any" }
        ],
        outputs: [{ id: "result", type: "variable" }],
        operatorFormat: "infix"
      }
    ];
  
  