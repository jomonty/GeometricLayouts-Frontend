import VerticesByGridRef from "./containers/VerticesByGridRef";

function App() {
  return (
    <>
      <header className="container m-auto flex justify-center">
        <h1 className="m-4 text-2xl font-extrabold tracking-wider text-green-950 md:m-6 md:text-4xl lg:m-8 lg:text-6xl">
          Geometric Layouts
        </h1>
      </header>
      <VerticesByGridRef />
    </>
  );
}

export default App;
