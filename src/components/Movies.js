import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!keyword) return; // Prevents searching with an empty query
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=35349a736eae14c1caed3005a307c333&query=${encodeURIComponent(
        keyword
      )}`
    )
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
        setLoading(false);
      });
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress} // Listening for key presses
        placeholder="Enter search keyword"
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
