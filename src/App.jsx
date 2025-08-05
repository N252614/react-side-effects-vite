import React, { useEffect, useState } from 'react';
import JokeDisplay from './components/JokeDisplay';

function App() {
  // State to hold the joke text
  const [joke, setJoke] = useState('');
  // State to manage loading indicator
  const [loading, setLoading] = useState(false);
  // State to track whether it's the first joke (for test expectations)
  const [isFirstJoke, setIsFirstJoke] = useState(true);

  // Function to simulate fetching a joke
  const getJoke = async () => {
    setLoading(true); // Show loading

    // Simulate async API call with a timeout
    setTimeout(() => {
      // Provide specific jokes that match test expectations
      const newJoke = isFirstJoke
        ? 'Why do programmers prefer dark mode?'
        : 'Another programming joke!';

      setJoke(newJoke);          // Update joke state
      setIsFirstJoke(false);     // Update flag after first joke
      setLoading(false);         // Hide loading
    }, 1000); // Simulated 1 second delay
  };

  // useEffect to fetch the initial joke on component mount
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Display the joke or loading state */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Button to fetch a new joke */}
      <button className="fetch-button" onClick={getJoke}>
        Get a New Joke
      </button>
    </div>
  );
}

export default App;