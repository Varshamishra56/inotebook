import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  const [modalNote, setModalNote] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "default",
  });

  const refClose = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    refClose.current.click();
    editNote(note.id, note.title, note.description, note.tag);
  };

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    setModalNote(currentNote);
    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
    ref.current.click();
  };

  return (
    <>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Open Modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="mx-4">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  onChange={onChange}
                  value={note.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={onChange}
                  value={note.description}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  name="tag"
                  className="form-control"
                  id="tag"
                  onChange={onChange}
                  value={note.tag}
                />
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={note.title.length < 6 || note.description.length < 6}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
        {notes.length === 0 ? (
          <p className="text-muted">There are no notes to display.</p>
        ) : (
          <div className="row">
            {notes.map((note) => (
              <Noteitem key={note._id} note={note} updateNote={updateNote} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
