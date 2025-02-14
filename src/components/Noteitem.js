import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = ({ note }) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;

  return (
    <div className="col-md-3">
      <div className="card my-3 shadow-sm border-0 rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-danger btn-sm d-flex align-items-center"
              onClick={() => deleteNote(note._id)}
            >
              <i className="fa-solid fa-trash me-1"></i> Delete
            </button>

            <button
              className="btn btn-primary btn-sm d-flex align-items-center"
              onClick={editNote}
            >
              <i className="fa-solid fa-pen-to-square me-1"></i> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
