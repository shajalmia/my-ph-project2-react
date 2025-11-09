import "./App.css";
import Counter from "./counter";
import Baller from "./batsman";

function App() {
  // EVENT HANDLER:
  // Outside normal Function:
  function handleClick() {
    alert("Outside normal Function.");
  }

  // Outside Arrow Function:
  const handleClick3 = () => {
    alert("Outside Arrow Function.");
  };

  // Pass Parameter Outside Arrow Function:

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      {/* useState Component call: */}
      <Baller></Baller>
      <Counter></Counter>

      {/* EVENT HANDLER */}

      {/* Outside normal function */}
      <button onClick={handleClick}>Click Me 1</button>

      {/* Inside normal function */}
      <button
        onClick={function handleClick2() {
          alert("Inside normal function.");
        }}
      >
        Click Me 2
      </button>

      {/* Outside Arrow function */}
      <button onClick={handleClick3}>Click Me 3</button>

      {/* Inside Arrow function */}
      <button
        onClick={() => {
          alert("Inside Arrow Function.");
        }}
      >
        Click Me 4
      </button>

      {/* Pass Parameter Outside Arrow Function: */}
      <button onClick={() => handleAdd5(10)}>Add 5</button>
    </>
  );
}

export default App;
