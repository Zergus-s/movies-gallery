import { TypeBackground } from '@material-ui/core/styles/createPalette';

export interface ExtraBackground {
  blue: string;
  white: string;
  backgroundGray: string;
}

export type BackgroundExtendedType = Partial<TypeBackground> & Partial<ExtraBackground>
