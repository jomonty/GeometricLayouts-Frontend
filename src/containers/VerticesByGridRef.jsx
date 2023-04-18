import { useState } from "react";

import GridRefInput from "../components/GridRefInput";
import Graph from "../components/Graph";

const VerticesByGridRef = () => {
  const [vertices, setVertices] = useState({
    vertex1: { X: 0, Y: 0 },
    vertex2: { X: 10, Y: 10 },
    vertex3: { X: 0, Y: 10 },
  });

  return (
    <main>
      <GridRefInput setVertices={setVertices} />
      <Graph vertices={vertices} />
    </main>
  );
};
export default VerticesByGridRef;
