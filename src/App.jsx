import { useEffect, useState } from 'react';
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
      function App() {
     const [starships, setStarships] = useState([]);
      useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getAllStarships();
        setStarships(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchStarships();
  }, []);

  return (
    <div>
    <main>
      <h1>Star Wars Starships</h1>
      {starships.map((starship, index) => (
        <StarshipCard
          key={index}
          starship={starship}
        />
      ))}
    </main>
    </div>
  );
}

export default App;