const BASE_URL = "https://swapi.dev/api";

export async function getAllStarships() {
  const response = await fetch(`${BASE_URL}/starships/`);

  if (!response.ok) {
    throw new Error("Failed to fetch starships");
  }

  const data = await res.json();
  return data.results;
}