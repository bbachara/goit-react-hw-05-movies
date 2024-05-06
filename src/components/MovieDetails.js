import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

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

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>No movie found</div>;

  // Function to handle back navigation
  const goBack = () => {
    navigate(-1); // Goes back one step in the browser's history stack
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div>
        <button onClick={goBack} style={{ marginBottom: '10px' }}>
          Go Back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ marginRight: '20px' }}
        />
      </div>
      <div>
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
          <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetails;
