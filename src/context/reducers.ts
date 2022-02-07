import {
  AuthorisationAction,
  AuthorisationState,
  AuthorisationActionType,
} from './AppContext';

export function AuthorisationReducer(
  state: AuthorisationState, action: AuthorisationAction,
): AuthorisationState {
  const copy = { ...state };

  switch (action.type) {
    case AuthorisationActionType.Login:
      copy.email = action.email as string;
      copy.name = 'User';
      copy.password = action.password as string;

      return copy;
    case AuthorisationActionType.SignUp:
      copy.email = action.email as string;
      copy.name = action.name;
      copy.password = action.password as string;

      return copy;
    case AuthorisationActionType.LogOut:
      copy.email = '' as string;
      copy.name = '' as string;
      copy.password = '' as string;

      return copy;
    default:
      break;
  }

  return copy;
}
