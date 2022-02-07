import sc from 'styled-components/macro';

import { Button, Card, CardActions } from '@material-ui/core';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('assets/guardians.jpg');

export const GalleryContainerStyled = sc.div(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  overflowY: 'scroll',
  padding: theme.spacing(5),
  backgroundImage: `url(${image})`,

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    gap: theme.spacing(4),
  },
}));

export const MovieScrollContainer = sc.div(({ theme }) => ({
  paddingTop: theme.spacing(50),
  maxWidth: theme.spacing(200),
  margin: '0px auto 0px auto',
  display: 'grid',
  gridTemplateColumns: '1fr  1fr',
  gap: theme.spacing(10),
  justifyItems: 'center',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const InfoTextStyled = sc.div(({ theme }) => ({
  width: '100%',
  maxHeight: theme.spacing(15),
  display: 'grid',
  gridTemplateColumns: '3fr 0.5fr 3fr 0.5fr 1fr ',
  overflow: 'hidden',
  color: theme.palette.secondary.light,
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignContent: 'flex-start',
}));

export const ThumbIconStyled = sc(ThumbDownAltTwoToneIcon)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1.25),
  border: `1px solid ${theme.palette.error.main}`,
  color: theme.palette.error.main,
}));

export const InfoButtonStyled = sc(Button)(({ theme }) => ({
  marginRight: theme.spacing(58),
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  border: `1px solid ${theme.palette.secondary.main}`,
  padding: 0,
}));

export const TitleStyled = sc(Typography)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  top: theme.spacing(96),
  color: 'white',
  backgroundColor: theme.palette.background.grayBlue,
  marginLeft: '-10px',
  padding: theme.spacing(0.5, 2),
}));

export const CardStyled = sc(Card)<{$isLogIn:boolean}>(({ theme, $isLogIn }) => ({
  width: theme.spacing(86),
  height: $isLogIn ? theme.spacing(125) : theme.spacing(105),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'peru',
  boxSizing: 'border-box',
  opacity: '0.7',

  '&:hover': {
    opacity: '1',
  },
}));

export const CardActionsStyled = sc(CardActions)({
  position: 'absolute',
  top: 0,
  left: 0,
});
