import React, { useState } from "react";

function CreateArea({ addNote }) {
  // set state
  const [note, setNote] = useState({ title: "", content: "" });

  // track the input value
  function inputOnchange(e) {
    const { name, value } = e.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function handleClick (event){    
    addNote(note);
    setNote({ title: "", content: "" })
    event.preventDefault();
  }

  return (
    <div>
      <form id="form">
        <input
          onChange={inputOnchange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={inputOnchange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
