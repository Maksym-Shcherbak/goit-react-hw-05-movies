import { Link, Outlet } from 'react-router-dom';
import {
  ImageWrapper,
  InfoTable,
  MovieName,
  StyledImage,
  StyledSection,
  StyledSubTitle,
} from './MovieDetailsItem.styled';
import { normalizeDate } from 'helpers/normalizeDate';

export const MovieDetailsItem = ({ movie }) => {
  const userScore = Number((movie.vote_average / 10) * 100).toFixed(0);
  let releaseDate;
  if (movie.release_date) {
    releaseDate = normalizeDate(movie.release_date.split('-').join(','));
  }
  let country;
  if (movie.production_countries.length > 0) {
    country = movie.production_countries[0].name;
  }
  return (
    <>
      <MovieName>{movie.title}</MovieName>
      <StyledSection>
        <InfoTable>
          <ImageWrapper>
            <StyledImage
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg'
              }
              alt={movie.title}
            />
          </ImageWrapper>
          <div>
            <p>User score: {userScore}%</p>
            {movie.tagline && <p>Tagline: {movie.tagline}</p>}
            <p>
              Genres:{' '}
              {movie.genres.length > 0
                ? movie.genres.map((genre, index) => {
                    if (index !== movie.genres.length - 1) {
                      return `${genre.name}, `;
                    }
                    return `${genre.name}`;
                  })
                : 'No information'}
            </p>
            <p>Release date: {releaseDate ? releaseDate : 'No information'}</p>
            <p>Country: {country ? country : 'No information'}</p>
            <p>Duration: {movie.runtime} min</p>
          </div>
        </InfoTable>
      </StyledSection>
      <StyledSection>
        <StyledSubTitle>What the movie {movie.title} is about:</StyledSubTitle>
        <p>{movie.overview}</p>
      </StyledSection>
      <StyledSection>
        <StyledSubTitle>Additional information</StyledSubTitle>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </StyledSection>
    </>
  );
};