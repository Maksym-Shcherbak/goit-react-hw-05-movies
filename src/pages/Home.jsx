import { useState, useEffect } from 'react';
import { getMovies } from 'helpers/MoviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ChangeTrendTime } from 'components/TrendButtons/TrendButtons';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [timeTrend, setTimeTrend] = useState('day');
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const response = await getMovies(timeTrend);
        setTrendMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error.message);
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
      {trendMovies && <MoviesList movies={trendMovies} />}
    </>
  );
};

export default Home;
