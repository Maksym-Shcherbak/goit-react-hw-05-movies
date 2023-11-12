import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'helpers/MoviesAPI';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getActors = async () => {
      try {
        const response = await getCast(movieId);
        setActors(response.data.cast);
      } catch (error) {
        setError(error);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map(({ id, profile_path, name, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `http://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="150"
                />
                <h3>{original_name}</h3>
                <p>{character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
