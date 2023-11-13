import { Outlet } from 'react-router-dom';
import {
  ImageWrapper,
  InfoTable,
  MoreInfoAbout,
  MovieInfoTable,
  MovieName,
  MovieTableItem,
  MovieTableItemName,
  MovieTableItemText,
  StyledImage,
  StyledLink,
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
          <MovieInfoTable>
            <MovieTableItem>
              <MovieTableItemText>
                <MovieTableItemName>User score:</MovieTableItemName> {userScore}
                %
              </MovieTableItemText>
            </MovieTableItem>
            <MovieTableItem>
              {' '}
              {movie.tagline && (
                <MovieTableItemText>
                  <MovieTableItemName>Tagline:</MovieTableItemName>{' '}
                  {movie.tagline}
                </MovieTableItemText>
              )}
            </MovieTableItem>
            <MovieTableItem>
              <MovieTableItemText>
                <MovieTableItemName>Genres:</MovieTableItemName>{' '}
                {movie.genres.length > 0
                  ? movie.genres.map((genre, index) => {
                      if (index !== movie.genres.length - 1) {
                        return `${genre.name}, `;
                      }
                      return `${genre.name}`;
                    })
                  : 'No information'}
              </MovieTableItemText>
            </MovieTableItem>
            <MovieTableItem>
              <MovieTableItemText>
                <MovieTableItemName>Release date:</MovieTableItemName>{' '}
                {releaseDate ? releaseDate : 'No information'}
              </MovieTableItemText>
            </MovieTableItem>
            <MovieTableItem>
              <MovieTableItemText>
                <MovieTableItemName>Country:</MovieTableItemName>{' '}
                {country ? country : 'No information'}
              </MovieTableItemText>
            </MovieTableItem>
            <MovieTableItem>
              <MovieTableItemText>
                <MovieTableItemName>Duration:</MovieTableItemName>{' '}
                {movie.runtime} min
              </MovieTableItemText>
            </MovieTableItem>
          </MovieInfoTable>
        </InfoTable>
      </StyledSection>
      <StyledSection>
        <StyledSubTitle>What the movie {movie.title} is about:</StyledSubTitle>
        <p>{movie.overview}</p>
      </StyledSection>
      <StyledSection>
        <StyledSubTitle>Additional information</StyledSubTitle>
        <MoreInfoAbout>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </MoreInfoAbout>
        <Outlet />
      </StyledSection>
    </>
  );
};
