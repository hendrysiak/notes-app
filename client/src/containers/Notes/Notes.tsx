import React from "react";

const Notes = (props: any) => {
  const createNote = () => {
    return { __html: props.content };
  };
  return (
    <li data-id={props.id} className="Note" onClick={props.clicked}>
      <h4>{props.date}</h4>
      <div dangerouslySetInnerHTML={createNote()}></div>
      <button>DELETE NOTE</button>
    </li>
  );
};

export default Notes;
