import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <>
      <AddNote />
      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className="row">
          {notes.map((note) => (
            <Noteitem key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
