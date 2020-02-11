import React, { useState, useEffect } from "react";
import "./App.css";
import EditNote from "./components/EditNote/EditNote";
import Notes from "./containers/Notes/Notes";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [editNote, setEditNote] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:4000/notes");
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const changeEvent = (event: any) => {
    event.preventDefault();
    const element = event.target;
    setEditNote(element.getAttribute("data-id"));
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Notes">
        <ul>
          {data
            ? data.map((item: any) => (
                <Notes
                  key={item._id}
                  id={item._id}
                  date={item.date}
                  content={item.note}
                  clicked={(event: any) => changeEvent(event)}
                />
              ))
            : null}
        </ul>

        {<EditNote isEdit={editNote} />}
      </div>
    </div>
  );
};

export default App;
