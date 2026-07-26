import { useEffect, useState } from 'react';
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
export default function App() {
     const [starships, setStarships] = useState([]);
  return (
    <main>
      <h1>Star Wars Starships</h1>
    </main>
  );
}

export default App;