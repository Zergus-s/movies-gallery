import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { MovieData } from 'utils/models/MoviesData.interface';

import { MODAL_CONSTANTS, CARD_HEIGHT } from 'containers/gallery/utils/constants';

import {
  CardActionsStyled,
  CardStyled,
  InfoButtonStyled,
  InfoTextStyled,
  ThumbIconStyled,
  TitleStyled,
} from '../utils/styled';

const MovieCard = (
  { movie, isLogIn, handleOpenModal }:
  {movie : MovieData, isLogIn: boolean, handleOpenModal: (movie: MovieData) => void},
): JSX.Element => {
  const handleInfoClick = (): void => {
    handleOpenModal(movie as MovieData);
  };
  return (
    <CardStyled $isLogIn={isLogIn}>
      <CardMedia
        loading="lazy"
        component="img"
        height={CARD_HEIGHT}
        image={movie.poster}
        alt={movie.title}
      />
      <CardContent style={{ padding: 10, width: '100%' }}>
        <TitleStyled
          variant="h6"
          noWrap
        >
          {movie.title}
        </TitleStyled>
        {isLogIn && (
          <InfoTextStyled>
            <Typography variant="body2">
              {movie.genre}
            </Typography>
            <Divider orientation="vertical" />
            <Typography variant="body2">
              {movie.director}
            </Typography>
            <Divider orientation="vertical" />
            <Typography variant="body2">
              {movie.year}
            </Typography>
          </InfoTextStyled>
        )}
      </CardContent>
      <CardActionsStyled>
        <InfoButtonStyled size="small" onClick={handleInfoClick}>
          {MODAL_CONSTANTS.INFO}
        </InfoButtonStyled>
        {(+movie.imdbrating < 7) && <ThumbIconStyled />}
      </CardActionsStyled>
    </CardStyled>
  );
};

export default MovieCard;
