export const dataStyles = {
    default: {
      borderColor: 'whitesmoke',
    },
    flow: {
      borderColor: 'antiquewhite',
      borderRadius: '2px',
    },
    logic: {
      borderColor: 'rgb(154, 8, 8)',
    },
    int: {
      borderColor: 'teal',
    },
    float: {
      borderColor: 'rgb(0, 172, 0)',
    },
    string: {
      borderColor: 'fuchsia',
    },
    transform: {
      borderColor: 'rgb(188, 122, 0)',
    },
    vector3: {
      borderColor: 'rgb(184, 184, 0)',
    },
    vector2: {
      borderColor: 'rgb(184, 184, 0)',
    },
    agent: {
      borderColor: 'blue',
    },
    range: {
      borderColor: 'blue',
    },
    array: {
      borderColor: 'blue',
    },
    map: {
      borderColor: 'blue',
    },
    tuple: {
      borderColor: 'blue',
    },
    any: {
      borderColor: 'blue',
    },
  };
  
  // Usage in a component
  const NodeComponent = ({ type }) => {
    // Determine the style based on the node type
    const handleStyle = {
      ...styles.handle, // base handle style
      ...styles[`handle${type.charAt(0).toUpperCase() + type.slice(1)}`], // type-specific style
    };
  
    return (
      <div className="node">
        <div className="handle" style={handleStyle}>
          {/* Node handle content here */}
        </div>
        {/* Other node content */}
      </div>
    );
  };
  