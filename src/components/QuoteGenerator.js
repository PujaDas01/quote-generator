import React, {useState, useEffect} from 'react';
import Quote from './Quote';
import '../styles/styles.css';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import axios from 'axios';

const QuoteGenerator = () => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setQuote({
                text: response.data.content,
                author: response.data.author,
            });
        } catch(error) {
            console.error('Error fetching quote:', error);
        }
    }

    const handleNewQuote = () => {
        fetchQuote();
    }

  return (
    <div className='quote-generator'>
        <Quote text={quote.text} author={quote.author} />
        <button className='new-quote-button' onClick={handleNewQuote}>New Quote</button>
        {/* <br/> */}
        <div className='icon-container'>
            <div>
                <TwitterShareButton
                    title={`${quote.text} - ${quote.author}`}
                    url='https://your-website-url'
                >
                    <TwitterIcon size={32} round/>
                </TwitterShareButton>
            </div>
            <div>
                <FacebookShareButton
                    title={`${quote.text} - ${quote.author}`}
                    url='https://your-website-url'
                >
                    <FacebookIcon size={32} round/>
                </FacebookShareButton>
            </div>
        </div>
    </div>
  )
}

export default QuoteGenerator;
