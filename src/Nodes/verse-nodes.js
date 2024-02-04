export const expressionNodes = [
  {
    id: "0",
    type: "sourceNode",
    data: { name: "OSIPI12" },
    position: { x: 0, y: 80 },
  },
  {
    id: "1",
    type: "dataNode",
    data: { name: "some_source_data" },
    position: { x: 200, y: 80 },
  },
  {
    id: "2",
    type: "dataNode",
    data: { name: "another_source_data" },
    position: { x: 200, y: 180 },
  },
  {
    id: "3",
    type: "dataNode",
    data: { name: "uploaded_data", uploaded: true },
    position: { x: 200, y: 280 },
  },
  {
    id: "4",
    type: "functionNode",
    data: {
      name: "some_function",
      inputs: [
        { label: "Dataset", type: "data" },
        { label: "Labels", type: "data" },
      ],
      outputs: [
        { label: "Model", type: "data" },
        { label: "Error", type: "value" },
      ],
    },
    position: { x: 500, y: 80 },
  },
  {
    id: "5",
    type: "dataNode",
    data: { name: "generated_data" },
    position: { x: 700, y: 80 },
  },
  {
    id: "6",
    type: "valueNode",
    data: { name: "generated_value", value: "0.8638" },
    position: { x: 700, y: 180 },
  },
]; /*,
  {
    id: "1",
    type: "IfElseExpressionNode",
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      )
    }
    description:
      "Conditional expression evaluating to different values based on a condition.",
    inputs: [
      { label: "Condition", type: "text", name: "condition" },
      { label: "True Case", type: "text", name: "trueCase" },
      { label: "False Case", type: "text", name: "falseCase" },
    ],
    outputs: [{ position: "Bottom" }],
  },
  {
    id: 2,
    type: "ForLoopExpressionNode",
    description:
      "Loop that iterates and evaluates to an array based on a condition.",
    inputs: [
      { label: "Sequence", type: "text", name: "sequence" },
      { label: "Condition", type: "text", name: "condition" },
    ],
    outputs: [{ position: "Bottom" }],
  },
  {
    id: 3,
    type: "LiteralExpressionNode",
    description:
      "Represents fixed values like numbers, characters, strings, etc.",
    inputs: [{ label: "Value", type: "text", name: "value" }],
    outputs: [{ position: "Bottom" }],
  },
  // Additional expression nodes can be added here...
];

*/
