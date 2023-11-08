import { Outlet, NavLink } from 'react-router-dom';
// import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
