import React from 'react';

import {
  AuthorisationContext,
  IAuthorisationContext,
} from './AppContext';

export function useAuthorisationContext(): IAuthorisationContext {
  const context = React.useContext(AuthorisationContext);

  if (context === undefined) {
    throw new Error('Authorisation Context must be used within a AuthorisationContextProvider');
  }

  return context;
}
