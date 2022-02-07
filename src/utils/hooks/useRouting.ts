import { useNavigate } from 'react-router';

import { ROUTES } from 'common/components/routes/constants';
import { UseRouting } from 'utils/models/UseRouting.interdace';

const useRouting = (): UseRouting => {
  const navigate = useNavigate();

  const handleChangeRoute = (route: string): void => {
    navigate(`../${route}`, { replace: true });
  };

  const toLoginRoute = (): void => {
    handleChangeRoute(ROUTES.LOGIN);
  };

  const toRegistrationRoute = (): void => {
    handleChangeRoute(ROUTES.SIGN_UP);
  };

  const toHomePageRoute = (): void => {
    handleChangeRoute(ROUTES.HOME);
  };
  const toBrowsingPageRoute = (): void => {
    handleChangeRoute(ROUTES.FILMS);
  };

  return {
    toLoginRoute,
    toRegistrationRoute,
    toHomePageRoute,
    toBrowsingPageRoute,
  };
};

export default useRouting;
