import "./styles.css";

interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <div className="quote">
      <blockquote className="quote__text">
        <p>{text}</p>
      </blockquote>
    </div>
  );
}
