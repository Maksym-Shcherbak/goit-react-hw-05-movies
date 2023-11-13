import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink.styled';
import { getMovieById } from 'helpers/MoviesAPI';
import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieById(movieId);
        setMovieInfo(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {movieInfo && <MovieDetailsItem movie={movieInfo} />}
    </>
  );
};

export default MovieDetails;
