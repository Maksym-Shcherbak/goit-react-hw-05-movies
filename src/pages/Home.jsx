import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'helpers/PixabayAPI';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendMovies();
  }, []);

  const getTrendMovies = async () => {
    try {
      const response = await getMovies('day');
      setTrendMovies(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(trendMovies);
  return (
    <main>
      <h1>Welcome</h1>
      <ul>
        {trendMovies.length > 0 &&
          trendMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link>
                  <img
                    src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width="350"
                  />
                  <h3>{movie.original_title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
};
