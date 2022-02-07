import { useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  AuthorisationActionType,
} from 'context/AppContext';
import { useAuthorisationContext } from 'context/hooks';
import { ROUTES } from 'common/components/routes/constants';
import { MAIN_CONSTANTS } from 'utils/constants';

import {
  HeaderStyled,
  ButtonStyled,
  ButtonWrapper,
  NavLinkStyled,
} from './styled';

const Header = (): JSX.Element | null => {
  const { state, dispatch } = useAuthorisationContext();
  const location = useLocation();

  const isLoggedIn = !!state.email && !!state.password;
  const isStartPage = location.pathname.includes(ROUTES.HOME);
  const isBrowsingPage = location.pathname.includes(ROUTES.FILMS);

  const handleLogout = (): void => {
    dispatch({ type: AuthorisationActionType.LogOut });
  };

  return (
    isStartPage ? null
      : (
        <HeaderStyled>
          <ButtonWrapper>
            {!isStartPage && (
              <ButtonStyled
                variant="outlined"
                color="default"
              >
                <NavLinkStyled
                  to={ROUTES.HOME}
                >
                  {MAIN_CONSTANTS.BACK_HOME}
                </NavLinkStyled>
              </ButtonStyled>
            )}
            {isLoggedIn && (
              <Button
                variant="contained"
                color="default"
                onClick={handleLogout}
              >
                {MAIN_CONSTANTS.LOGOUT}
              </Button>
            )}
          </ButtonWrapper>
          <ButtonWrapper>
            {!isLoggedIn && isBrowsingPage && (
              <Button
                variant="contained"
                style={{ padding: 0 }}
                color="default"
              >
                <NavLinkStyled
                  to={ROUTES.LOGIN}
                >
                  {MAIN_CONSTANTS.LOGIN}
                </NavLinkStyled>
              </Button>
            )}
            {!isLoggedIn && isBrowsingPage && (
              <Button
                variant="contained"
                color="default"
                style={{ padding: 0 }}
              >
                <NavLinkStyled
                  to={ROUTES.SIGN_UP}
                >
                  {MAIN_CONSTANTS.SIGN_UP}
                </NavLinkStyled>
              </Button>
            )}
            {isLoggedIn && (
              <Typography
                variant="h5"
                color="secondary"
              >
                {MAIN_CONSTANTS.WELCOME}
                <strong>{state.name}</strong>
              </Typography>
            )}
          </ButtonWrapper>
        </HeaderStyled>
      )
  );
};

export default Header;
