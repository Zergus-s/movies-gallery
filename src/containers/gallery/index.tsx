import MovieScroller from './components/MovieScroller';
import FilmsCarousel from './components/slider/FilmsCarousel';

import { GalleryContainerStyled } from './utils/styled';

export const Gallery = (): JSX.Element => (
  <GalleryContainerStyled>
    <FilmsCarousel />
    <MovieScroller />
  </GalleryContainerStyled>
);
