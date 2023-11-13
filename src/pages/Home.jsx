import { useState, useEffect } from 'react';
import { getMovies } from 'helpers/MoviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ChangeTrendTime } from 'components/TrendButtons/TrendButtons';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [timeTrend, setTimeTrend] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!timeTrend) {
      return;
    }
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setTrendMovies([]);
        setError(null);
        const response = await getMovies(timeTrend);
        setTrendMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, [timeTrend]);

  const getTrendTime = timeWindow => {
    setTimeTrend(timeWindow);
  };

  return (
    <>
      <h1>Find the movie you wanted and enjoy it</h1>
      {<ChangeTrendTime onGetTrendTime={getTrendTime} />}
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {trendMovies.length !== 0 && <MoviesList movies={trendMovies} />}
    </>
  );
};

export default Home;
