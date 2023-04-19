import { useState, useEffect } from "react";

import { getVerticesByGridRef } from "../api/APIHandler";
import Instructions from "./Instructions";

const GridRefInput = ({ setVertices, setGrid }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [request, setRequest] = useState({
    gridRef: "A1",
    gridHeight: 60,
    gridWidth: 60,
    gridSquareSideLength: 10,
  });

  useEffect(() => {
    updateVertices();
  }, []);

  const updateVertices = async () => {
    const response = await getVerticesByGridRef(request);
    const data = await response.json();
    if (response.status === 200) {
      const updatedGrid = {
        gridHeight: parseInt(request.gridHeight),
        gridWidth: parseInt(request.gridWidth),
        gridSquareSideLength: parseInt(request.gridSquareSideLength),
      };
      setVertices(data);
      setGrid(updatedGrid);
    } else {
      setAlertOpen(true);
      setAlertMessage(data);
    }
  };

  const handleInputChange = (event) => {
    const updatedRequest = { ...request };
    updatedRequest[event.target.name] = event.target.value;
    setRequest(updatedRequest);
    setAlertOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    updateVertices();
  };

  const Alert = ({ message }) => {
    return (
      <div className="flex w-full items-center justify-center rounded border border-red-700 bg-red-500 transition">
        <p className="py-3 font-bold text-white">{message}</p>
      </div>
    );
  };
  return (
    <div className="border">
      <form
        className="flex flex-col items-center justify-center p-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4">
          <div className="flex w-9/12 flex-col justify-start">
            <label className="text-green-950" htmlFor="gridRef">
              Grid Ref
            </label>
            <input
              className="mt-2 pl-3 shadow"
              id="gridRef"
              name="gridRef"
              type="text"
              value={request.gridRef}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-9/12 flex-col justify-start">
            <label className="text-green-950" htmlFor="gridHeight">
              Grid Height
            </label>
            <input
              className="mt-2 pl-3 shadow"
              id="gridHeight"
              name="gridHeight"
              type="number"
              value={request.gridHeight}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-9/12 flex-col justify-start">
            <label className="text-green-950" htmlFor="gridWidth">
              Grid Width
            </label>
            <input
              className="mt-2 pl-3 shadow"
              id="gridWidth"
              name="gridWidth"
              type="number"
              value={request.gridWidth}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-9/12 flex-col justify-start">
            <label className="text-green-950" htmlFor="gridSquareSideLength">
              Grid Square Side Length
            </label>
            <input
              className="mt-2 pl-3 shadow"
              id="gridSquareSideLength"
              name="gridSquareSideLength"
              type="number"
              value={request.gridSquareSideLength}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center gap-x-5">
          <Instructions />
          <button
            className="my-6 rounded border border-green-700 bg-transparent px-4 py-2 font-semibold text-green-700 hover:border-transparent hover:bg-green-600 hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        {alertOpen ? <Alert message={alertMessage} /> : ""}
      </form>
    </div>
  );
};
export default GridRefInput;
