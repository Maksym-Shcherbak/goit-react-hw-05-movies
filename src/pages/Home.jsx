import { useState, useEffect } from 'react';
import { getMovies } from 'helpers/MoviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ChangeTrendTime } from 'components/TrendButtons/TrendButtons';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [timeTrend, setTimeTrend] = useState('day');
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setTrendMovies(null);
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

  const onChangeTrend = e => {
    console.log(e.target);
    if (e.target.dataset.time === 'day') {
      setDisabled(disabled => !disabled);
      e.target.disabled = !disabled;
      e.target.nextElementSibling.disabled = disabled;
    } else {
      setDisabled(disabled => !disabled);
      e.target.disabled = disabled;
      e.target.previousElementSibling.disabled = !disabled;
    }
    setTimeTrend(e.target.dataset.time);
  };

  return (
    <>
      <h1>Find the movie you wanted and enjoy it</h1>
      {
        <ChangeTrendTime
          onChangeTrend={onChangeTrend}
          firstBtnText={'Day'}
          secondBtnText={'Week'}
          day={'day'}
          week={'week'}
        />
      }
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {trendMovies && <MoviesList movies={trendMovies} />}
    </>
  );
};

export default Home;
