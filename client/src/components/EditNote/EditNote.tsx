import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const EditNote = (props: any) => {
  const [editorState, setEditorState] = useState<any | null>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (props.isEdit) {
      const startEdit = async () => {
        try {
          const note = await axios.get(
            `http://localhost:4000/notes/${props.isEdit}`
          );
          const content = await convertFromHTML(note.data.note);
          const noteToEdit = ContentState.createFromBlockArray(
            content.contentBlocks,
            content.entityMap
          );
          await setEditorState(EditorState.createWithContent(noteToEdit));
        } catch (err) {
          alert(err);
        }
      };
      startEdit();
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [props.isEdit]);
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

  const saveNote = async () => {
    const contentState = editorState.getCurrentContent();
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:4000/notes",
        data: { note: `${stateToHTML(contentState)}` }
      });
      saveNoteHandler(result.data);
      setEditorState(EditorState.createEmpty());
      setBoldActive(false);
      setItalicActive(false);
    } catch (err) {
      alert(err);
    }
  };

  const updateNote = async () => {
    const contentState = editorState.getCurrentContent();
    if (window.confirm("Are you sure?")) {
      const note = `${stateToHTML(contentState)}`;
      try {
        await axios({
          method: "put",
          url: `http://localhost:4000/notes/${props.isEdit}`,
          data: { note }
        });
        updateNoteHandler(note, props.isEdit);
        setEditorState(EditorState.createEmpty());
        setBoldActive(false);
        setItalicActive(false);
      } catch (err) {
        alert(err);
      }
    } else {
      return;
    }
  };

  const saveNoteHandler = (result: any) => {
    const data = [...props.data];
    data.push(result);
    props.setData(data);
  };

  const updateNoteHandler = (note: any, id: string) => {
    const data = [...props.data];
    data[data.findIndex(note => note._id === id)].note = note;
    props.setData(data);
  };

  return (
    <div className="AddNote">
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
      <button
        onClick={() => {
          saveNote();
        }}
      >
        SAVE NOTE
      </button>
      <button
        onClick={() => {
          updateNote();
        }}
      >
        UPDATE NOTE
      </button>
    </div>
  );
};

export default EditNote;
