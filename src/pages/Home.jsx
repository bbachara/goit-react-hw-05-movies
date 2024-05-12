import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Loader from '../components/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=35349a736eae14c1caed3005a307c333'
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="trending-movies">
      <h1>Trending Movies</h1>
      <ul className="trending-movies-list">
        {movies.map(movie => (
          <li className="trending-movies-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: 'Home' }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '200px' }}
              />
              <div>{movie.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
