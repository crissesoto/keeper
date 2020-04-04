import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  // add note to notelist array
  function addNote(note) {
    setNoteList(prevValue => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNoteList(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.length > 0
        ? noteList.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                deleteNote={deleteNote}
              />
            );
          })
        : null}
      <Footer />
    </div>
  );
}

export default App;
