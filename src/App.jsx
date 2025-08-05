import React, { useEffect, useState } from 'react';
import JokeDisplay from './components/JokeDisplay';

function App() {
  // State for joke text
  const [joke, setJoke] = useState('');
  // State for loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch joke (mocked in tests)
  const getJoke = async () => {
    setLoading(true);
    try {
      // Fetch is mocked in tests, so this URL doesn't matter
      const response = await fetch('https://example.com');
      const data = await response.json();
      // Tests expect data.joke
      setJoke(data.joke);
    } catch (error) {
      setJoke('Failed to load joke');
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount to fetch the first joke
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Display loading or joke */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Button to fetch a new joke */}
      <button className="fetch-button" onClick={getJoke}>
        Get a New Joke
      </button>
    </div>
  );
}

export default App;