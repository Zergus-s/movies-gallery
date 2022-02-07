import sc from 'styled-components/macro';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export const HomeContainerStyled = sc(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  padding: theme.spacing(4),
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(10),

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    gap: theme.spacing(4),
  },
}));

export const NavLinkStyled = sc(Button)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.gray,
  width: '30%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(10),
  borderRadius: theme.shape.borderRadius,
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: 30,

  [theme.breakpoints.down('md')]: {
    width: '60%',
    padding: theme.spacing(3),
  },
}));

export const NavLinkBrowseStyled = sc(NavLinkStyled)(({ theme }) => ({
  color: theme.palette.background.white,
  backgroundColor: theme.palette.background.turquoiseGreen,

  '&:hover': {
    color: theme.palette.background.turquoiseGreen,
  },
}));
