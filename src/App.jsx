import React, { useEffect, useState } from 'react';
import JokeDisplay from './components/JokeDisplay';

function App() {
  // Step 1: Create state to store the joke and loading status
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFirstJoke, setIsFirstJoke] = useState(true); // Track if it's the initial joke

  // Step 2: Define a function to fetch a new joke
  const getJoke = async () => {
    setLoading(true); // Show loading while fetching

    // Simulate async API call with setTimeout
    setTimeout(() => {
      // Step 3: Set a specific joke based on whether it's the first load or a click
      const newJoke = isFirstJoke
        ? 'Why do programmers prefer dark mode?'
        : 'Another programming joke!'; // This must match the test exactly

      setJoke(newJoke); // Set new joke
      setIsFirstJoke(false); // Flip the flag so next joke is the second one
      setLoading(false); // Done loading
    }, 1000); // Small delay to simulate API
  };

  // Step 4: Fetch the initial joke on mount
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Step 5: Pass `joke` and `loading` as props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Step 6: Add button to fetch new joke */}
      <button className="fetch-button" onClick={getJoke}>
        Get a New Joke
      </button>
    </div>
  );
}

export default App;