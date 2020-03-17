import React from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function App({notes}) {
  console.log(notes)
  return (
    <div>
      <Header/>
      {
        notes.map(note =>{
          return <Card key={note.key} title={note.title} content={note.content} />
        })
      }
      <Footer/>
    </div>
  );
}


export default App;
