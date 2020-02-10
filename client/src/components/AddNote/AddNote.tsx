import React, { useEffect, useMemo, useState, FunctionComponent } from "react";
// import { createEditor, Editor, Transforms } from "slate";
// import { Slate, Editable, withReact, useSlate } from "slate-react";
// import Editor from "../Slate/Editor";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";

interface MyEditorProps {}
const AddNote: FunctionComponent = (props: MyEditorProps) => {
  const [editorState, setEditorState] = useState<any | null>(
    EditorState.createEmpty()
  );
  const [boldIsActive, setBoldActive] = useState<boolean>(false);
  const [italicIsActive, setItalicActive] = useState<boolean>(false);

  const toggleInlineStyle = (event: any) => {
    event.preventDefault();
    let style = event.currentTarget.getAttribute("data-style");
    switch (style) {
      case "BOLD":
        setBoldActive(!boldIsActive);
        break;
      case "ITALIC":
        setItalicActive(!italicIsActive);
        break;
    }
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const saveNote = () => {
    const contentState = editorState.getCurrentContent();
    console.log(stateToHTML(contentState));
    // console.log(convertToRaw(contentState));
  };

  return (
    <div className="AppContainer">
      <button
        className={boldIsActive ? "active" : ""}
        data-style="BOLD"
        onMouseDown={event => toggleInlineStyle(event)}
      >
        B
      </button>

      <button
        className={italicIsActive ? "active" : ""}
        data-style="ITALIC"
        onMouseDown={event => toggleInlineStyle(event)}
      >
        I
      </button>
      <div className="DraftWrapper">
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
      <button onClick={saveNote}>ADD NOTE TO DB</button>
    </div>
  );
};

export default AddNote;
