import PropTypes from 'prop-types';
import { Grid } from './MoviesList.styled';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesList = ({ movies }) => (
  <Grid>
    <MoviesItem movies={movies} />
  </Grid>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
