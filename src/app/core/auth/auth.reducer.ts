// src/app/store/reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';

export interface AuthState {
  user: any;
  error: any;
  loading: boolean;
}

export const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.checkAuthState, (state) => ({ ...state, loading: true })),
  on(AuthActions.checkAuthStateSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(AuthActions.checkAuthStateFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.signInWithPassword, AuthActions.signUp, (state) => ({ ...state, loading: true })),
  on(
    AuthActions.signInWithMagicLinkSuccess,
    AuthActions.signInWithPasswordSuccess, 
    AuthActions.signUpSuccess, 
    (state, { user }) => ({ ...state, user, loading: false })
  ),
  on(AuthActions.signInWithPasswordFailure, AuthActions.signUpFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.signOut, (state) => ({ ...state, loading: true })),
  on(AuthActions.signOutSuccess, (state) => ({ ...state, user: null, loading: false })),
  on(AuthActions.signOutFailure, (state, { error }) => ({ ...state, error, loading: false }))
);