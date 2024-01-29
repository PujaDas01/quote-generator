import React from 'react';

const Quote = (props) => {
  return (
    <div className="quote-container">
      <blockquote className="quote">
        <p>{props.text}</p>
        <footer>{props.author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
