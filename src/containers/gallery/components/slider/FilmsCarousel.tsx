import { memo, useState, useEffect } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useGetMovies } from 'utils/hooks/useGetMoviesData';

import { PosterWrapper } from './styled';

const FilmsCarousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { fetchMoreData, scrolledMovies } = useGetMovies();

  useEffect(() => {
    if (currentSlide === scrolledMovies.current.length - 3) { fetchMoreData(); }
  }, [currentSlide, fetchMoreData, scrolledMovies]);

  useEffect(() => {
    fetchMoreData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      swipeable
      emulateTouch
      centerMode
      swipeScrollTolerance={1}
      centerSlidePercentage={40}
      selectedItem={currentSlide}
      onChange={(index) => {
        setCurrentSlide(index);
      }}
    >
      { scrolledMovies.current.map((movie) => (
        <PosterWrapper key={movie.id}>
          <CardMedia
            component="img"
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
            style={{ objectFit: 'contain', height: 550 }}
          />
          <Typography variant="h4" color="secondary">{movie.title}</Typography>
        </PosterWrapper>
      ))}
    </Carousel>
  );
};

export default memo(FilmsCarousel);
