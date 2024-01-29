import React from 'react';

const Quote = (props) => {
  return (
    <div className="quote-container">
      <blockquote className="quote">
        <p>random text</p>
        <footer>random author</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
