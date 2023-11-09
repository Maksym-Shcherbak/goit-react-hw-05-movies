import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'helpers/PixabayAPI';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getActors = async () => {
      try {
        const response = await getCast(movieId);
        setActors(response.data.cast);
      } catch (error) {
        console.log(error.message);
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
                  src={`http://image.tmdb.org/t/p/original${profile_path}`}
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
