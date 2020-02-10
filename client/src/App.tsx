import React, { useState, useEffect } from "react";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import Notes from "./containers/Notes/Notes";

const App = () => {
  const [counter, setValue] = useState(0);

  useEffect(() => {
    console.log(`Wyrenderowano stronę ${counter} razy`);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Notes />
        <AddNote />
      </header>
    </div>
  );
};

export default App;
