import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import { useGetMovies } from 'utils/hooks/useGetMoviesData';
import { useAuthorisationContext } from 'context/hooks';

import { MovieData } from 'utils/models/MoviesData.interface';
import MovieCard from './Card';

import { MovieScrollContainer } from '../utils/styled';
import { ModalWindow } from './modal/ModalWindow';

const MovieScroller = (): JSX.Element => {
  const { state } = useAuthorisationContext();
  const { fetchMoreData, loader, scrolledMovies } = useGetMovies();
  const [choosenMovie, setChoosenMovie] = useState({} as MovieData);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (movie: MovieData): void => {
    setChoosenMovie(movie);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
  };

  const isLoggedIn = !!state.email && !!state.password;

  useEffect(() => {
    fetchMoreData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieScrollContainer>
      {scrolledMovies.current.map((movie) => (
        <Grid item xs={12} key={movie.title + movie.released + movie.id}>
          <MovieCard handleOpenModal={handleOpenModal} movie={movie} isLogIn={isLoggedIn} />
        </Grid>
      ))}
      {modalOpen && <ModalWindow open={modalOpen} closeModal={closeModal} movie={choosenMovie} />}
      <div ref={loader} />
    </MovieScrollContainer>
  );
};

export default MovieScroller;
