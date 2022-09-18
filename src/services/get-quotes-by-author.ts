export async function getQuotesByAuthor(author: string) {
  const queryPath = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;

  const res = await fetch(queryPath);
  const json = await res.json();
  return json.data;
}
