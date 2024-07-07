// src/app/store/actions/auth.actions.ts

import { createAction, props } from '@ngrx/store';

export const checkAuthState = createAction('[Auth] Check Auth State');
export const checkAuthStateSuccess = createAction('[Auth] Check Auth State Success', props<{ user: any }>());
export const checkAuthStateFailure = createAction('[Auth] Check Auth State Failure', props<{ error: any }>());

export const signIn = createAction('[Auth] Sign In', props<{ email: string; password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success', props<{ user: any }>());
export const signInFailure = createAction('[Auth] Sign In Failure', props<{ error: any }>());

export const signUp = createAction('[Auth] Sign Up', props<{ email: string; password: string }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: any }>());

export const signOut = createAction('[Auth] Sign Out');
export const signOutSuccess = createAction('[Auth] Sign Out Success');
export const signOutFailure = createAction('[Auth] Sign Out Failure', props<{ error: any }>());