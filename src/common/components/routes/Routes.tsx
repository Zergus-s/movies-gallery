import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Login from 'containers/login/Login';
import { Home } from 'containers/main/home-screen/index';
import Registration from 'containers/sign-up/Registration';
import { useAuthorisationContext } from 'context/hooks';

import { Gallery } from 'containers/gallery';
import { ROUTES } from './constants';

const AppRoutes = (): JSX.Element => {
  const { state } = useAuthorisationContext();
  const isLoggedIn = !!state.email && !!state.password;

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      {!isLoggedIn && <Route path={ROUTES.LOGIN} element={<Login />} />}
      {!isLoggedIn && <Route path={ROUTES.SIGN_UP} element={<Registration />} />}
      <Route path={ROUTES.FILMS} element={<Gallery />} />
      <Route
        path="*"
        element={<Navigate to={ROUTES.HOME} />}
      />
    </Routes>
  );
};

export default AppRoutes;
