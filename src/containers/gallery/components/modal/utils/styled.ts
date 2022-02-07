import sc from 'styled-components/macro';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export const BootstrapDialog = sc(Dialog)(({ theme }) => ({
  margin: 'auto',
  '& .MuiDialogActions-root': {
    padding: theme.spacing(8),
    alignSelf: 'left',
  },
}));

export const ModalWrapperStyled = sc.div(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.text.disabled,
}));

export const IconButtonStyled = sc(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(5),
  right: theme.spacing(5),
  padding: 0,
}));

export const ModalTitleStyled = sc(Typography)(({ theme }) => ({
  padding: theme.spacing(4, 8, 4, 8),
  fontSize: theme.spacing(6),
  fontWeight: 'bolder',
  backgroundColor: theme.palette.secondary.main,
}));

export const ModalTextStyled = sc.div(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 8, 4, 8),
  fontSize: theme.spacing(3.5),
  fontWeight: theme.spacing(25),
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.secondary.main,
  borderTop: `1px solid ${theme.palette.primary.light}`,
}));

export const ModalBodyStyled = sc.div({
  display: 'flex',
  flexWrap: 'wrap',
});
