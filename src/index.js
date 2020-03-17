import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import notes from './notes';

ReactDOM.render(<App notes={notes}/>, document.getElementById('root'));


