import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { fakeMovies } from 'mock-data/imdb';
import { MovieData } from 'utils/models/MoviesData.interface';
import { UseGetMoviesProps } from 'utils/models/UseGetMovies.interface';

import useInfiniteScroll from './useInfiniteScroll';

export const useGetMovies = (): UseGetMoviesProps => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const { loading, setLoading, loader } = useInfiniteScroll();
  const scrolledMovies = useRef([] as MovieData[]);

  const movieData = [...fakeMovies];

  const fetchMoreData = useCallback((): void => {
    scrolledMovies.current = [...scrolledMovies.current, ...movies];
    const freshData = [] as MovieData[];

    for (let counter = 0; counter < 20; counter += 1) {
      const newValue = movieData.shift();
      if (!newValue) return;
      scrolledMovies.current.push(newValue as MovieData);
    }
    setMovies([...movies, ...freshData]);
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) return;
    fetchMoreData();
  }, [fetchMoreData, loading]);

  return { fetchMoreData, loader, scrolledMovies };
};
