import { useState, useEffect } from "react";

import { getVerticesByGridRef } from "../api/APIHandler";

const GridRefInput = ({ setVertices }) => {
  const [request, setRequest] = useState({
    gridRef: "A1",
    gridHeight: 60,
    gridWidth: 60,
    gridSquareSideLength: 10,
  });

  useEffect(() => {
    updateVertices().then((res) => {
      setVertices(res);
    });
  }, []);

  const updateVertices = async () => {
    const response = await getVerticesByGridRef(request);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };

  const handleInputChange = (event) => {
    const updatedRequest = { ...request };
    updatedRequest[event.target.name] = event.target.value;
    setRequest(updatedRequest);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await updateVertices();
    setVertices(data);
  };
  return (
    <div className="m-5 border">
      <form className="flex flex-row" onSubmit={handleFormSubmit}>
        <label htmlFor="gridRef">
          Grid Ref:
          <input
            className="m-2 px-4 shadow"
            id="gridRef"
            name="gridRef"
            type="text"
            value={request.gridRef}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default GridRefInput;
