import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "varsha",
    class: "Artificial Intelligence",
  };
  const [state, setstate] = useState(s1);
  const update = (newName, newClass) => {
    setTimeout(() => {
      setstate({
        name: newName,
        class: newClass,
      });
    }, 1000);
  };
  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
