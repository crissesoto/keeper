import React from 'react';

function Card({title, content}) {
  return (
    <div className="note">
      <h1 className="node-title">{title}</h1>
      <p className="node-content">{content}</p>
    </div>
  );
}

export default Card;

