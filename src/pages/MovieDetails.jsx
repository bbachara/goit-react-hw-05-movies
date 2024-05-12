import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Loader from '../components/Loader';
import './MovieDetails.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from;

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
          src={
            movie && movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie ? movie.title : ''}
        />
      </div>
      <div className="movie-details-descr">
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1>{movie ? movie.title : ''}</h1>
            <p>
              <strong>Overview:</strong> {movie ? movie.overview : ''}
            </p>
            <p>
              <strong>Genres:</strong>{' '}
              {movie &&
                movie.genres &&
                movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p>
              <strong>Release Date:</strong> {movie ? movie.release_date : ''}
            </p>
            <p>
              <strong>Rating:</strong> {movie ? movie.vote_average : ''} / 10
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
            <Outlet loading={loading} />
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
