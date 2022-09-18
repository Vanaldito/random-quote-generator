import { useEffect, useState } from "react";
import { getRandomQuote } from "./services/get-random-quote";

import Quote from "./components/Quote";
import Loader from "./components/Loader";
import RandomIcon from "./components/Icons/Random";

import { QuoteInfo } from "./types";

import "./App.css";

export default function App() {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | null>(null);

  // In React strict mode each component is rendered twice,
  // so the random quote will change.
  // This only happens in development.
  useEffect(generateNewQuote, []);

  function generateNewQuote() {
    setQuoteInfo(null);

    getRandomQuote().then(info => setQuoteInfo(info));
  }

  const loadingQuote = quoteInfo === null;

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
          <Quote
            text={quoteInfo.quoteText}
            author={quoteInfo.quoteAuthor}
            genre={quoteInfo.quoteGenre}
          />
        </>
      )}
    </main>
  );
}
