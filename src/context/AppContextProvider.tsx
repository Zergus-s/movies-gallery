import React, { useMemo } from 'react';

import { AuthorisationReducer } from './reducers';
import { AuthorisationContext } from './AppContext';

export const AppContextProvider = (
  { children }: {children: React.ReactNode},
): JSX.Element => {
  const [authorisationState, authorisationDispatch] = React.useReducer(
    AuthorisationReducer, { email: 'aasd', password: 'asda', name: 'User' },
  );

  const AuthorisationContextValue = useMemo(() => ({
    state: authorisationState,
    dispatch: authorisationDispatch,
  }), [authorisationState]);

  return (
    <AuthorisationContext.Provider value={AuthorisationContextValue}>
      {children}
    </AuthorisationContext.Provider>
  );
};
