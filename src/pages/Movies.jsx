import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from 'helpers/MoviesAPI';
import ReactPaginate from 'react-paginate';
import '../../node_modules/react-paginate/theme/basic/react-paginate.css';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const onGetQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const MovieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!MovieName) {
      return;
    }
    const getMoviesBySearch = async () => {
      try {
        const response = await fetchMoviesBySearch(MovieName, page);
        setMovies(response.data.results);
        console.log(response.data);
        setPageCount(response.data.total_pages);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoviesBySearch();
  }, [MovieName, page]);

  const handlePageClick = ({ selected }) => {
    console.log(selected);
    setPage(selected + 1);
  };

  return (
    <>
      <Searchbar onGetMovies={onGetQuery} />
      {movies && <MoviesList movies={movies} />}
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      )}
    </>
  );
};

export default Movies;
