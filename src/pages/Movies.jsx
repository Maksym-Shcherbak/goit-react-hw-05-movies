import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from 'helpers/MoviesAPI';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const onGetQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setPage(1);
    setPageCount(0);
  };

  const MovieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!MovieName) {
      return;
    }
    const getMoviesBySearch = async () => {
      try {
        setIsLoading(true);
        setMovies([]);
        setError(null);
        const response = await fetchMoviesBySearch(MovieName, page);
        if (response.data.total_results === 0) {
          console.log('waht');
          return toast.error('Nothing found for your request');
        }
        setMovies(response.data.results);
        console.log(response.data);
        setPageCount(response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
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
      {movies.length !== 0 && !isLoading && <MoviesList movies={movies} />}
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
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
