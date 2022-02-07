import useRouting from 'utils/hooks/useRouting';
import { MAIN_CONSTANTS } from 'utils/constants';
import { useAuthorisationContext } from 'context/hooks';

import {
  HomeContainerStyled,
  NavLinkBrowseStyled,
  NavLinkStyled,
} from './styled';

export const Home = (): JSX.Element => {
  const { state } = useAuthorisationContext();
  const { toBrowsingPageRoute, toLoginRoute, toRegistrationRoute } = useRouting();

  const isLoggedIn = !!state.email && !!state.password;

  return (
    <HomeContainerStyled>
      {!isLoggedIn && (
        <>
          <NavLinkStyled onClick={toLoginRoute}>{MAIN_CONSTANTS.LOGIN}</NavLinkStyled>
          <NavLinkStyled onClick={toRegistrationRoute}>{MAIN_CONSTANTS.SIGN_UP}</NavLinkStyled>
        </>
      )}
      <NavLinkBrowseStyled onClick={toBrowsingPageRoute}>{MAIN_CONSTANTS.BROWSE}</NavLinkBrowseStyled>
    </HomeContainerStyled>

  );
};
