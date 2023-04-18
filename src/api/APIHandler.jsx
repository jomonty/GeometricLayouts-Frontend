export const getVerticesByGridRef = async (body) => {
  const response = await fetch("/api/geometry/verticesbygridref", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};
