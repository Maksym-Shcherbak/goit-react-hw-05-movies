import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route> */}
      </Route>
    </Routes>
  );
};
