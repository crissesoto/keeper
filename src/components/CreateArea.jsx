import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import brown from '@material-ui/core/colors/brown';
import Zoom from '@material-ui/core/Zoom';

//addIcon color
const primary = brown[500]; // #795548


function CreateArea({ addNote }) {
  // set state
  const [note, setNote] = useState({ title: "", content: "" });
  const [uiStyleShow, setUiStyleShow] = useState(false);

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

  function handleUi () {
    console.log("fucused")
    setUiStyleShow(true)
  }


  return (
    <div>
      <form className="create-note">
      { uiStyleShow && 
        <input
          onChange={inputOnchange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
      }
        <textarea
          onChange={inputOnchange}
          name="content"
          placeholder="Take a note..."
          rows= {uiStyleShow ? "3" : "1"}
          value={note.content}
          onFocus={handleUi}

        />
        <Zoom in={uiStyleShow}>
            <Fab onClick={handleClick} color={primary} aria-label="add">
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
