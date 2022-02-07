import sc from 'styled-components/macro';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export const FooterStyled = sc.div(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1),
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.dark,
  alignItems: 'center',
  flexWrap: 'wrap',

  '&:hover': {
    '*': {
      display: 'inherit',
    },
  },

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    height: 'auto',
  },
}));

export const IconButtonStyled = sc(IconButton)(({ theme }) => ({
  display: 'none',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.darkBlue,
  color: theme.palette.background.white,
  border: `1px solid ${theme.palette.background.white}`,
  marginRight: theme.spacing(5),

  [theme.breakpoints.down('md')]: {
    fontSize: 'small',
    margin: 0,
  },
}));

export const TypographyStyled = sc(Typography)(({ theme }) => ({
  display: 'none',
  margin: theme.spacing(2.5),
}));
