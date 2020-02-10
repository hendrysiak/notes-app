import React, { useState, useEffect } from "react";
import "./App.css";
import EditNote from "./components/EditNote/EditNote";
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
        <EditNote />
      </header>
    </div>
  );
};

export default App;
