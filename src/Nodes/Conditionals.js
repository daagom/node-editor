export const nodes = [
    {
      id: "ifElseNode",
      type: "ifElse",
      label: "If-Else Condition",
      inputs: [
        { id: "flow", type: "flow" },
        { id: "Condition", type: "logic" }
      ],
      outputs: [
        { id: "True", type: "flow" },
        { id: "False", type: "flow" },
      ],
    },
    {
      id: "forNode",
      type: "for",
      label: "For Loop",
      inputs: [
        { id: "flow", type: "flow" },
        { id: "range", type: "range" }
      ],
      outputs: [
        { id: "Loop", type: "flow" },
        { id: "Completed", type: "flow" },
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
  