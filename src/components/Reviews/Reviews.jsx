import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'helpers/MoviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const saveReviews = async () => {
      try {
        const response = await getReviews(movieId);
        console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    saveReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews &&
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
