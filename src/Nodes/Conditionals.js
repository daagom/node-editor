export const nodes = [
    {
      id: "ifElseNode",
      type: "ifElse",
      label: "If-Else Condition",
      inputs: [{ id: "cond", type: "boolean" }],
      outputs: [
        { id: "then", type: "flow" },
        { id: "else", type: "flow" },
      ],
    },
    {
      id: "forNode",
      type: "for",
      label: "For Loop",
      inputs: [{ id: "range", type: "range" }],
      outputs: [
        { id: "body", type: "flow" },
        { id: "exit", type: "flow" },
      ],
    },
    {
      id: "rangeNode",
      type: "range",
      label: "Range",
      inputs: [
        { id: "start", type: "number" },
        { id: "end", type: "number" },
      ],
      outputs: [{ id: "value", type: "number" }],
    },
  ];
  