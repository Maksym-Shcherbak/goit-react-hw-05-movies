import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'helpers/MoviesAPI';
import {
  ActorAvatar,
  ActorName,
  ActorRole,
  CastItem,
  CastList,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getActors = async () => {
      try {
        setIsLoading(true);
        const response = await getCast(movieId);
        setActors(response.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <>
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {actors.length === 0 && <div>We don't know anything about the cast.</div>}
      <CastList>
        {actors &&
          actors.map(({ id, profile_path, name, original_name, character }) => {
            return (
              <CastItem key={id}>
                <ActorAvatar
                  src={
                    profile_path
                      ? `http://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="150"
                />
                <ActorName>{original_name}</ActorName>
                <ActorRole>{character}</ActorRole>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};

export default Cast;
