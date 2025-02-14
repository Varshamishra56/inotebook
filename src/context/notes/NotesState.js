import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhMGM5MjY0MGU4M2JiYTQwYmU5ZGUyIn0sImlhdCI6MTczOTEwMTgxMH0.SfBc-ivqfNjr6xIteWzke3LEgYR1XRFK3AUbUHxFqQs",
      },
      body: JSON.stringify(),
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhMGM5MjY0MGU4M2JiYTQwYmU5ZGUyIn0sImlhdCI6MTczOTEwMTgxMH0.SfBc-ivqfNjr6xIteWzke3LEgYR1XRFK3AUbUHxFqQs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
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
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhMGM5MjY0MGU4M2JiYTQwYmU5ZGUyIn0sImlhdCI6MTczOTEwMTgxMH0.SfBc-ivqfNjr6xIteWzke3LEgYR1XRFK3AUbUHxFqQs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhMGM5MjY0MGU4M2JiYTQwYmU5ZGUyIn0sImlhdCI6MTczOTEwMTgxMH0.SfBc-ivqfNjr6xIteWzke3LEgYR1XRFK3AUbUHxFqQs",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
