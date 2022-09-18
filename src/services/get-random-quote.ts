import { QuoteInfo } from "../types";

export async function getRandomQuote(): Promise<QuoteInfo> {
  const res = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );

  const resJson = await res.json();

  return resJson.data[0];
}
