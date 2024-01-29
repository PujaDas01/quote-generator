import React from 'react';
import Quote from './Quote';
import '../styles/styles.css';

const QuoteGenerator = () => {
  return (
    <div className='quote-generator'>
        <Quote text='random text' author='random author' />
        <button className='new-quote-button'>New Quote</button>
    </div>
  )
}

export default QuoteGenerator;
