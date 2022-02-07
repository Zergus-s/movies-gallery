import sc from 'styled-components/macro';

import Typography from '@material-ui/core/Typography';

const DefaultContainer = sc.div(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4),
  maxWidth: '100%',
  width: '100%',
}));

export const BodyContainer = sc(DefaultContainer)({
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  padding: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  owerflowX: 'scroll',
});

export const LoginContainerStyled = sc(DefaultContainer)({
  justifyContent: 'center',
  alignItems: 'ceter',
  flexDirection: 'column',
  heigth: '100%',
  boxSizing: 'border-box',
});

export const InputsWrapperStyled = sc(DefaultContainer)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  gap: theme.spacing(6),
  padding: 0,
}));

export const FormWrapperStyled = sc(DefaultContainer)(({ theme }) => ({
  width: '40%',
  border: `1px solid  ${theme.palette.primary.light}`,
  borderRadius: theme.shape.borderRadius,
  height: '100%',
  flexDirection: 'column',
  gap: theme.spacing(5),
  margin: 'auto',
  padding: theme.spacing(15),

  [theme.breakpoints.down('md')]: {
    width: '85%',
    padding: theme.spacing(5),
  },
}));

export const FormTitleStyled = sc(Typography)({
  userSelect: 'none',
});

export const LinkStyled = sc(Typography)(({ theme }) => ({
  cursor: 'pointer',

  '&:hover': {
    color: theme.palette.background.blue,
  },
}));
