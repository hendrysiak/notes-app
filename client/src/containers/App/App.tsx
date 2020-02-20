import React, { useState, useEffect } from "react";
import "./App.css";
import EditNote from "../../components/EditNote/EditNote";
import Notes from "../../components/Notes/Notes";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

const App = () => {
  const [data, setData] = useState<[]>([]);
  const [editNote, setEditNote] = useState<string>("");
  const [isLoading, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:4000/notes");
        setData(result.data);
        setLoadingState(false);
      } catch (err) {
        alert(err);
        setLoadingState(false);
      }
    };
    getData();
  }, [data]);

  const changeEvent = (event: any) => {
    event.stopPropagation();
    const element = event.target.parentNode;
    setEditNote(element.getAttribute("data-id"));
  };

  return (
    <div className="App">
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
                  data={data}
                  setData={setData}
                />
              ))
            : null}
        </ul>

        <EditNote isEdit={editNote} data={data} setData={setData} />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default App;
