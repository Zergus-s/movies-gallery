import { MovieData } from './MoviesData.interface';

export interface UseGetMoviesProps {
fetchMoreData: ()=> void,
 loader: React.MutableRefObject<null>,
 scrolledMovies: React.MutableRefObject<MovieData[]>
}
