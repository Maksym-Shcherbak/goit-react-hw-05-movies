import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink.styled';
import { getMovieById } from 'helpers/MoviesAPI';
import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
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
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {movieInfo && <MovieDetailsItem movie={movieInfo} />}
    </>
  );
};

export default MovieDetails;
