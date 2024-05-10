import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Loader from './Loader';
import './MovieDetails.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from;
  console.log('Origin is:', origin);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=35349a736eae14c1caed3005a307c333`
    )
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <Loader style={{ margin: '0 auto' }} />;
  if (!movie) return <div>No movie found</div>;

  const goBack = () => {
    if (origin === 'Movies') {
      navigate('/movies');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="movie-details-div">
      <div className="movie-details">
        <button className="go-back-button" onClick={goBack}>
          Back
        </button>
        <img
          className="movie-details-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-details-descr">
        <h1>{movie.title}</h1>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {movie.genres.map(genre => genre.name).join(', ')}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </p>
        <div>
          <Link to="cast" state={{ from: origin }}>
            Cast
          </Link>{' '}
          |{' '}
          <Link to="reviews" state={{ from: origin }}>
            Reviews
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetails;
