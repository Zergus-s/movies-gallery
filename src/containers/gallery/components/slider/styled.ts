import sc from 'styled-components/macro';

export const PosterWrapper = sc.div(({ theme }) => ({
  backgroundColor: 'rgba(22, 22, 44, .5)',
  height: theme.spacing(150),
  display: 'flex',
  margin: theme.spacing(3),
  flexDirection: 'column',
}));
