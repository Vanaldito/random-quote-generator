import { useEffect, useState } from "react";
import { getRandomQuote } from "./services/get-random-quote";

import Quote from "./components/Quote";
import Loader from "./components/Loader";
import RandomIcon from "./components/Icons/Random";
import AuthorQuotes from "./components/AuthorQuotes";

import { QuoteInfo } from "./types";

import "./App.css";

export default function App() {
  const [author, setAuthor] = useState("");
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | null>(null);

  // In React strict mode each component is rendered twice,
  // so the random quote will change.
  // This only happens in development.
  useEffect(generateNewQuote, []);

  function generateNewQuote() {
    setAuthor("");
    setQuoteInfo(null);

    getRandomQuote().then(info => setQuoteInfo(info));
  }

  function selectAuthor(newAuthor: string) {
    return () => {
      setAuthor(newAuthor);
    };
  }

  const loadingQuote = quoteInfo === null;

  if (author) {
    return (
      <main>
        <button
          className="new-quote-button"
          type="button"
          onClick={generateNewQuote}
        >
          random <RandomIcon />
        </button>

        <AuthorQuotes author={author} />
      </main>
    );
  }

  return (
    <main>
      {loadingQuote ? (
        <Loader />
      ) : (
        <>
          <button
            className="new-quote-button"
            type="button"
            onClick={generateNewQuote}
          >
            random <RandomIcon />
          </button>
          <Quote text={quoteInfo.quoteText} />
          <button
            className="quote-info"
            type="button"
            onClick={selectAuthor(quoteInfo.quoteAuthor)}
          >
            <p className="quote-author">{quoteInfo.quoteAuthor}</p>
            <p className="quote-genre">{quoteInfo.quoteGenre}</p>
          </button>
        </>
      )}
    </main>
  );
}
