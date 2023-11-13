import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'helpers/MoviesAPI';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const saveReviews = async () => {
      try {
        setIsLoading(true);
        const response = await getReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    saveReviews();
  }, [movieId]);

  return (
    <>
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading && <div>Sorry...No reviews yet.</div>}
      <ul>
        {reviews.length !== 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
