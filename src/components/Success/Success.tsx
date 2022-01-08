import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { fetchQuotes } from '../../api/typefit';

const StyledButton = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  background: green;
  color: white;
`;

export default function Success() {
  const [quote, setQuote] = useState('Loading quote...');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const history = useHistory();

  useEffect(() => {
    const loadRandomQuote = async () => {
      const quotes = await fetchQuotes();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.text);
      setQuoteAuthor(randomQuote.author);
    };

    loadRandomQuote();
  }, []);

  return (
    <StyledButton onClick={() => history.push('/')}>
      <h3>Great Job!</h3>
      <p>You finished this workout.</p>
      <blockquote cite={quoteAuthor}>"{quote}"</blockquote>
      <p>Click anywhere to continue...</p>
    </StyledButton>
  );
}
