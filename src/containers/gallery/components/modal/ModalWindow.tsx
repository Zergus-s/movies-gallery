import React from 'react';

import Typography from '@material-ui/core/Typography';

import { MovieData } from 'utils/models/MoviesData.interface';
import { MODAL_CONSTANTS } from 'containers/gallery/utils/constants';

import {
  ModalWrapperStyled,
  BootstrapDialog,
  ModalBodyStyled,
  ModalTextStyled,
  ModalTitleStyled,
} from './utils/styled';

export const ModalWindow = React.memo((
  { closeModal, movie, open }:
   { closeModal:()=> void, movie: MovieData, open: boolean},
): JSX.Element => (
  <BootstrapDialog
    onClose={closeModal}
    open={open}
  >
    <ModalWrapperStyled>
      <ModalTitleStyled>
        {movie.title}
      </ModalTitleStyled>
      <ModalBodyStyled>
        <img
          width="100%"
          height="auto"
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          style={{ maxHeight: '50vh', objectFit: 'contain' }}
        />
        <ModalTextStyled>
          <Typography gutterBottom variant="h5">{MODAL_CONSTANTS.INFO}</Typography>
          <Typography gutterBottom>{movie.plot}</Typography>
          <Typography gutterBottom variant="h5">{MODAL_CONSTANTS.WRITER}</Typography>
          <Typography gutterBottom>{movie.writer}</Typography>
          <Typography gutterBottom variant="h5">{MODAL_CONSTANTS.ACTORS}</Typography>
          <Typography gutterBottom>
            {movie.actors}
          </Typography>
          <Typography variant="h5">
            {MODAL_CONSTANTS.RATE}
          </Typography>
          <Typography>{movie.imdbrating}</Typography>
        </ModalTextStyled>
      </ModalBodyStyled>
    </ModalWrapperStyled>
  </BootstrapDialog>
));
