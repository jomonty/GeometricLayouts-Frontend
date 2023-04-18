import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const Graph = ({ vertices }) => {
  const [revision, setRevision] = useState(1);
  const [svgPath, setSVGPath] = useState("");
  useEffect(() => {
    const updatedRevision = revision + 1;
    setRevision(updatedRevision);
    const updatedSVGPath = formatSVGPath(vertices);
    setSVGPath(updatedSVGPath);
  }, [vertices]);

  const shapes = [
    {
      type: "path",
      path: svgPath,
      fillcolor: "rgba(44, 160, 101, 0.5",
      line: {
        color: "rgb(44, 160, 101)",
      },
    },
  ];

  const verticesForPlot = [
    {
      x: [
        vertices.vertex1.x,
        vertices.vertex2.x,
        vertices.vertex3.x,
        vertices.vertex1.x,
      ],
      y: [
        vertices.vertex1.y,
        vertices.vertex2.y,
        vertices.vertex3.y,
        vertices.vertex1.y,
      ],
      type: "scatter",
    },
  ];

  const layout = {
    shapes: shapes,
    datarevision: revision,
    width: 1000,
    height: 1000,
    margin: {
      pad: 20,
    },
    // transition: {
    //   duration: 500,
    //   // ordering: "layout first",
    // },

    xaxis: {
      range: [-2, 62],
      fixedrange: true,
      side: "top",
      zeroline: false,
      tick0: 0,
      dtick: 10,
      rangeselector: {
        borderwidth: 1,
      },
    },
    yaxis: {
      range: [62, -2],
      fixedrange: true,
      zeroline: false,
      tick0: 0,
      dtick: 10,
    },
  };

  const formatSVGPath = (vertices) => {
    return `M ${vertices.vertex1.x} ${vertices.vertex1.y} L ${vertices.vertex2.x} ${vertices.vertex2.y} L ${vertices.vertex3.x} ${vertices.vertex3.y} Z`;
  };

  return <Plot data={verticesForPlot} revision={revision} layout={layout} />;
};
export default Graph;
