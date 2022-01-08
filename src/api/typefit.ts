const BASE_ENDPOINT = 'https://type.fit/api';

export async function fetchQuotes() {
  const response = await fetch(`${BASE_ENDPOINT}/quotes`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`An error occurred fetching data: ${response}`);
  }
}
