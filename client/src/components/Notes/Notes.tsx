import React from "react";
import axios from "axios";

const Notes = (props: any) => {
  const createNote = () => {
    return { __html: props.content };
  };
  const deleteNote = async () => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:4000/notes/${props.id}`
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li className="Note">
      <div className="NoteWrapper" data-id={props.id} onClick={props.clicked}>
        <h4>{props.date}</h4>
        <div dangerouslySetInnerHTML={createNote()}></div>
        <button
          onClick={() => {
            deleteNote();
            props.shouldUpdate();
          }}
        >
          DELETE NOTE
        </button>
        <button onClick={props.clicked}>EDIT NOTE</button>
      </div>
    </li>
  );
};

export default Notes;