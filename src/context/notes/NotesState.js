import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "67aa083d83fcafc54e3f47bc",
      user: "67a0c92640e83bba40be9de2",
      title: "hello there",
      description: "this is my description",
      tag: "THis is a tag",
      date: "2025-02-10T14:07:57.579Z",
      __v: 0,
    },
    {
      _id: "67aa083d83fcafc54e3f47be",
      user: "67a0c92640e83bba40be9de2",
      title: "hello there",
      description: "this is my description",
      tag: "THis is a tag",
      date: "2025-02-10T14:07:57.721Z",
      __v: 0,
    },
    {
      _id: "67aa083d83fcafc54e3f47c0",
      user: "67a0c92640e83bba40be9de2",
      title: "hello there",
      description: "this is my description",
      tag: "THis is a tag",
      date: "2025-02-10T14:07:57.876Z",
      __v: 0,
    },
    {
      _id: "67aa083e83fcafc54e3f47c2",
      user: "67a0c92640e83bba40be9de2",
      title: "hello there",
      description: "this is my description",
      tag: "THis is a tag",
      date: "2025-02-10T14:07:58.062Z",
      __v: 0,
    },
    {
      _id: "67aa0ce53871635fdf96fc59",
      user: "67a0c92640e83bba40be9de2",
      title: "hello there",
      description: "this is my description",
      tag: "THis is a tag",
      date: "2025-02-10T14:27:49.634Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "67aa0ce53871635fdf96fc591",
      user: "67a0c92640e83bba40be9de2",
      title: title,
      description: description,
      tag: tag,
      date: "2025-02-10T14:27:49.634Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Edit a note
  const editNote = () => {};

  //Delete a note
  const deleteNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
