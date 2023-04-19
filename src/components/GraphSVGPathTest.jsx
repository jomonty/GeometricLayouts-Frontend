import { useState, useEffect } from "react";

const GraphSVGPathTest = ({ vertices }) => {
  const [trianglePath, setTrianglePath] = useState();
  useEffect(() => {
    const updatedPath = formatSVGPath(vertices);
    setTrianglePath(updatedPath);
  }, [vertices]);

  const ticks = [0, 10, 20, 30, 40, 50, 60];
  const horizontalGridLines = ticks.map((tick) => {
    return (
      <path
        d={`M 0 ${tick * 10} L 600 ${tick * 10} Z`}
        strokeWidth="1"
        stroke="black"
      />
    );
  });
  const verticalGridLines = ticks.map((tick) => {
    return (
      <path
        d={`M ${tick * 10} 0 L ${tick * 10} 600 Z`}
        strokeWidth="1"
        stroke="black"
      />
    );
  });

  const formatSVGPath = (vertices) => {
    return `M ${vertices.vertex1.x * 10} ${vertices.vertex1.y * 10} L ${
      vertices.vertex2.x * 10
    } ${vertices.vertex2.y * 10} L ${vertices.vertex3.x * 10} ${
      vertices.vertex3.y * 10
    } Z`;
  };

  const Triangle = () => {
    return <path d={trianglePath} />;
  };
  return (
    <div className="flex justify-center">
      <svg height="600" width="600">
        {horizontalGridLines}
        {verticalGridLines}
        <Triangle />
        {/* <path d="M 100 100 L 200 200 L 200 100 Z" /> */}
      </svg>
    </div>
  );
};
export default GraphSVGPathTest;
