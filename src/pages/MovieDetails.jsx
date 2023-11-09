import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'helpers/PixabayAPI';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  const getMovieDetails = async () => {
    try {
      console.log(movieId);
      const response = await getMovieById(movieId);
      console.log(response.data);
      setMovieInfo(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <>
          <img
            src={`http://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
            width="350"
          />
          <h2>{movieInfo.original_title}</h2>
          <p>User score: {(Number(movieInfo.vote_average) / 10) * 100}%</p>
          <p>{movieInfo.overview}</p>
          <p>Genres: {movieInfo.genres.map(genre => `${genre.name}, `)}</p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
