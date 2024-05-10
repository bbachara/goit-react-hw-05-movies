import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import Loader from './Loader';

function Movies() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!keyword) return;
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
    <div className="searched-movies">
      <h1>Search Movies</h1>
      <div className="input-div">
        <input
          className="searched-movies-input"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter search keyword"
        />
        <button className="searched-movies-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {results.map(movie => (
            <li className="searched-movies-item" key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: 'Movies' }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
