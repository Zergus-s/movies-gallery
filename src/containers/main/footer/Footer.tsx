import LinkedInIcon from 'common/components/icons/LinkedInIcon';

import { FOOTER } from './utils/constants';

import {
  IconButtonStyled,
  FooterStyled,
  TypographyStyled,
} from './utils/styled';

const Footer = (): JSX.Element => {
  const handleIconClick = (): void => {
    window.open(FOOTER.LINKEDIN, '_blank');
  };

  return (
    <FooterStyled>
      <TypographyStyled
        noWrap
        variant="h6"
        color="secondary"
      >
        {FOOTER.MADE_BY}
        {FOOTER.AUTHOR_NAME}
      </TypographyStyled>
      <IconButtonStyled onClick={handleIconClick}>
        <LinkedInIcon fontSize="small" />
      </IconButtonStyled>
    </FooterStyled>
  );
};

export default Footer;
