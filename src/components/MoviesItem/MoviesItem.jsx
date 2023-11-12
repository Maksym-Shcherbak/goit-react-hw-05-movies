import { Link, MovieName } from './MoviesItem.styled';
import { useLocation } from 'react-router-dom';
import { GridItem, ItemImage } from './MoviesItem.styled';

export const MoviesItem = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return movies.map(movie => {
    const path =
      location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`;

    return (
      <GridItem key={movie.id}>
        <Link to={path} state={{ from: location }}>
          <ItemImage
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg'
            }
            alt={movie.title}
          />
          <MovieName>
            <span>
              {movie.release_date ? movie.release_date.slice(0, 4) : '😱'}
            </span>
            ,{movie.title}
          </MovieName>
        </Link>
      </GridItem>
    );
  });
};
