import { useState } from "react";

import GridRefInput from "../components/GridRefInput";
import Graph from "../components/Graph";

const VerticesByGridRef = () => {
  const [grid, setGrid] = useState({
    gridHeight: 60,
    gridWidth: 60,
    gridSquareSideLength: 10,
  });
  const [vertices, setVertices] = useState({
    vertex1: { X: 0, Y: 0 },
    vertex2: { X: 10, Y: 10 },
    vertex3: { X: 0, Y: 10 },
  });

  return (
    <main className="container mx-auto flex flex-col items-center justify-center">
      <GridRefInput setVertices={setVertices} setGrid={setGrid} />
      <div className="lg:h-8/12 md:h-10/12 flex aspect-square h-full w-full items-center justify-center md:w-10/12 lg:w-8/12">
        <Graph vertices={vertices} grid={grid} />
      </div>
    </main>
  );
};
export default VerticesByGridRef;
