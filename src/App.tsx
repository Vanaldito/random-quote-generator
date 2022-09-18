import { useEffect, useState } from "react";
import { getRandomQuote } from "./services/get-random-quote";

import Quote from "./components/Quote";

import { QuoteInfo } from "./types";

import "./App.css";

export default function App() {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | null>(null);

  // In React strict mode each component is rendered twice,
  // so the random quote will change.
  // This only happens in development.
  useEffect(generateNewQuote, []);

  function generateNewQuote() {
    getRandomQuote().then(info => setQuoteInfo(info));
  }

  if (!quoteInfo) return null;

  return (
    <main>
      <button
        className="new-quote-button"
        type="button"
        onClick={generateNewQuote}
      >
        random
      </button>
      <Quote
        text={quoteInfo.quoteText}
        author={quoteInfo.quoteAuthor}
        genre={quoteInfo.quoteGenre}
      />
    </main>
  );
}
