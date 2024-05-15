import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';

function Movies() {
  const [searchParams, setSearchParams] = useState({ query: '' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const handleSearch = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams.query) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=35349a736eae14c1caed3005a307c333&query=${encodeURIComponent(
            searchParams.query
          )}`
        );
        const data = await response.json();
        setResults(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error searching movies:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="searched-movies">
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <ul className="searched-movies-list">
          {results.map(movie => (
            <li className="searched-movies-item" key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: 'Movies' }}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  style={{ width: '200px' }}
                />
                {!movie.poster_path && (
                  <div>Movie poster not yet available</div>
                )}
                <div>{movie.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
