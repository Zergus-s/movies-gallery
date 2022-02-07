import React from 'react';

export interface IAuthorisationContext {
  state: AuthorisationState, dispatch: AuthorisationDispatch
}

export type AuthorisationAction = {
  email?: string, password?: string, name?: string, type: AuthorisationActionType
}
export type AuthorisationState = { email: string, password: string, name?: string }
export type AuthorisationDispatch = (action: AuthorisationAction) => void

export enum AuthorisationActionType {
  Login = 'login',
  SignUp = 'sign-up',
  LogOut = 'log-out',
  Default = ''
}

export const AuthorisationContext = React.createContext<{
  state: AuthorisationState,
  dispatch: AuthorisationDispatch
}>({ state: {} as AuthorisationState, dispatch: {} as AuthorisationDispatch });
