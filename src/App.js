import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [inputs, setInputs] = useState([]);

  const eventHandler = (e) => {
    e.preventDefault();
    let targets = e.target;

    setInputs([
      {
        firstname: targets[0].value,
        lastname: targets[1].value,
        phone: targets[2].value,
      },
      ...inputs,
    ]);
    targets[0].value = "";
    targets[1].value = "";
    targets[2].value = "";
  };

  // Sorts entries with their lastnames
  const sortedInputs = inputs.sort((a, b) => {
    const nameA = a.lastname.toUpperCase();
    const nameB = b.lastname.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  });

  return (
    <div className="App">
      <form action="" onSubmit={(e) => eventHandler(e)}>
        <input type="text" placeholder="firstname" />
        <input type="text" placeholder="lastname" />
        <input type="number" placeholder="phone" />
        <input type="submit" />
        <Table inputs={sortedInputs} />
      </form>
    </div>
  );
}

export default App;
