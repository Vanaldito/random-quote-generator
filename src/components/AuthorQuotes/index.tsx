import { useEffect, useState } from "react";
import { getQuotesByAuthor } from "../../services/get-quotes-by-author";

import Quote from "../Quote";
import Loader from "../Loader";

import { QuoteInfo } from "../../types";

import "./styles.css";

interface AuthorQuotesProps {
  author: string;
}

export default function AuthorQuotes({ author }: AuthorQuotesProps) {
  const [quotes, setQuotes] = useState<QuoteInfo[]>([]);

  useEffect(() => {
    getQuotesByAuthor(author).then(quotes => setQuotes(quotes));
  }, []);

  const loadingQuotes = quotes.length === 0;

  return loadingQuotes ? (
    <Loader />
  ) : (
    <div>
      <h2 className="author-quotes__title">{author}</h2>
      {quotes.map(quoteInfo => (
        <Quote key={quoteInfo._id} text={quoteInfo.quoteText} />
      ))}
    </div>
  );
}
