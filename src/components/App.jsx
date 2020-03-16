import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Note title="First Note" content="Make undereyes cream today"/>
      <Note title="Advanced CSS" content="Course by Frontend masters"/>
      <Note title="PHP" content="Subscription on Synfony website/ Githup Student Pack"/>
      <Footer/>
    </div>
  );
}


export default App;
