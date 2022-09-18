import { useEffect, useState } from "react";
import { getRandomQuote } from "../../services/get-random-quote";

import { QuoteInfo } from "../../types";

import "./styles.css";

export default function Quote() {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | null>(null);

  // In React strict mode each component is rendered twice,
  // so the random quote will change.
  // This only happens in development.
  useEffect(() => {
    getRandomQuote().then(info => setQuoteInfo(info));
  }, []);

  if (!quoteInfo) return null;

  return (
    <div className="quote">
      <blockquote className="quote__text">
        <p>{quoteInfo.quoteText}</p>
      </blockquote>
      <div className="quote__info">
        <p className="quote__author">{quoteInfo.quoteAuthor}</p>
        <p className="quote__genre">{quoteInfo.quoteGenre}</p>
      </div>
    </div>
  );
}
