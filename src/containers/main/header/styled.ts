import sc from 'styled-components/macro';

import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = sc.div(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(3),
  width: '100%',
  maxHeight: theme.spacing(30),
  alignItems: 'space-between',
  backgroundColor: theme.palette.background.grayBlue,
  gap: theme.spacing(4),
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(20),
  },
}));

export const ButtonStyled = sc(Button)(({ theme }) => ({
  padding: 0,
  borderColor: theme.palette.background.white,

  a: {
    color: theme.palette.background.white,
  },
}));

export const ButtonWrapper = sc.div(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  gap: theme.spacing(4),
}));

export const NavLinkStyled = sc(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  padding: theme.spacing(2, 6),
  color: theme.palette.primary.main,

  '&:active': {
    color: theme.palette.background.gray,
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1, 3),
  },
}));
