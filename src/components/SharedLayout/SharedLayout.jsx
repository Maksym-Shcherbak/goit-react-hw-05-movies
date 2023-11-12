import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="computer icon">
              🎬
            </span>{' '}
            Cinema Max
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Container>
      <ToastContainer autoClose={4000} />
    </>
  );
};
