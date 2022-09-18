import "./styles.css";

interface QuoteProps {
  text: string;
  author: string;
  genre: string;
}

export default function Quote({ text, author, genre }: QuoteProps) {
  return (
    <div className="quote">
      <blockquote className="quote__text">
        <p>{text}</p>
      </blockquote>
      <div className="quote__info">
        <p className="quote__author">{author}</p>
        <p className="quote__genre">{genre}</p>
      </div>
    </div>
  );
}
