import { useEffect } from "react";
import Plot from "react-plotly.js";

const Graph = ({ vertices }) => {
  // if (vertices === undefined) {
  //   return <></>;
  // }
  const formatSVGPath = (vertices) => {
    return `M ${vertices.vertex1.x} ${vertices.vertex1.y} L ${vertices.vertex2.x} ${vertices.vertex2.y} L ${vertices.vertex3.x} ${vertices.vertex3.y} Z`;
  };

  useEffect(() => {
    revision++;
  }, [vertices]);

  let revision = 1;

  const shapes = [
    {
      type: "path",
      path: formatSVGPath(vertices),
      fillcolor: "rgba(44, 160, 101, 0.5",
      line: {
        color: "#4d7c0f",
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
      mode: "lines",
      type: "scatter",
      marker: {
        color: "#16a34a",
      },
    },
  ];

  const layout = {
    shapes: shapes,
    // datarevision: revision,
    // width: 1000,
    // height: 1000,
    margin: {
      pad: 20,
    },
    xaxis: {
      range: [-2, 62],
      fixedrange: true,
      side: "top",
      zeroline: false,
      tick0: 0,
      dtick: 10,
    },
    yaxis: {
      range: [62, -2],
      fixedrange: true,
      zeroline: false,
      tick0: 0,
      dtick: 10,
    },
  };

  return (
    <Plot
      data={verticesForPlot}
      revision={revision}
      layout={layout}
      className="h-full w-full"
    />
  );
};
export default Graph;
