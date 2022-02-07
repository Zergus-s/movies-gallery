import { createTheme } from '@material-ui/core';

import { BackgroundExtendedType } from './theme-types';

export const MEDIA_BREAKPOINTS = {
  xxs: 1,
  xs: 600,
  sm: 960,
  md: 1080,
  lg: 1300,
  xl: 1600,
  xxl: 1920,
};

const SPACING = 4 as const;

const BORDER_RADIUS = 6;

export const PALETTE = {
  MEDIUM_BLUE: '#1060AA',
  DARK_BLUE: '#0B4275',
  GRAY: '#C4C4C4',
  LIGHT_GRAY: '#BFC9D1',
  GRAY_BLUE: '#2F4F4F',
  WHITE: '#FFFFFF',
  BLACK: '#131212',
  TEXT_DISABLED: '#85939F',
  ERROR: '#EA001B',
  SUCCESS: '#0FA958',
  YELLOW: '#FFFF00',
  TURQUOISE: '#26A69A',
};

const theme = createTheme({
  breakpoints: {
    values: MEDIA_BREAKPOINTS,
  },
  spacing: SPACING,
  palette: {
    primary: {
      light: PALETTE.LIGHT_GRAY,
      main: PALETTE.BLACK,
    },
    secondary: {
      main: PALETTE.WHITE,
      contrastText: PALETTE.YELLOW,
    },
    success: {
      main: PALETTE.SUCCESS,
    },
    error: {
      main: PALETTE.ERROR,
    },
    text: {
      primary: PALETTE.BLACK,
      secondary: PALETTE.MEDIUM_BLUE,
      disabled: PALETTE.TEXT_DISABLED,
    },
    background: {
      grayBlue: PALETTE.GRAY_BLUE,
      blue: PALETTE.MEDIUM_BLUE,
      darkBlue: PALETTE.DARK_BLUE,
      white: PALETTE.WHITE,
      gray: PALETTE.GRAY,
      turquoiseGreen: PALETTE.TURQUOISE,
    } as BackgroundExtendedType,
  },
  shape: {
    borderRadius: BORDER_RADIUS,
  },
});

export default theme;
