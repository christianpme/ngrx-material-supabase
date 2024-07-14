// src/app/store/actions/auth.actions.ts

import { createAction, props } from '@ngrx/store';

export const checkAuthState = createAction('[Auth] Check Auth State');
export const checkAuthStateSuccess = createAction('[Auth] Check Auth State Success', props<{ user: any }>());
export const checkAuthStateFailure = createAction('[Auth] Check Auth State Failure', props<{ error: any }>());

export const signInWithPassword = createAction('[Auth] Sign In with Password', props<{ email: string; password: string }>());
export const signInWithPasswordSuccess = createAction('[Auth] Sign In with Password Success', props<{ user: any }>());
export const signInWithPasswordFailure = createAction('[Auth] Sign In with Password Failure', props<{ error: any }>());

export const signInSendMagicLink = createAction('[Auth] Sign In Send Magic Link', props<{ email: string }>());
export const signInConfirmMagicLink = createAction('[Auth] Sign In Confirm Magic Link', props<{ token_hash: any}>());
export const signInWithMagicLinkSuccess = createAction('[Auth] Sign In with Magic Link Success', props<{ user: any }>());
export const signInWithMagicLinkFailure = createAction('[Auth] Sign In with Magic Link Failure', props<{ error: any }>());


export const signUp = createAction('[Auth] Sign Up', props<{ email: string; password: string }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: any }>());

export const signOut = createAction('[Auth] Sign Out');
export const signOutSuccess = createAction('[Auth] Sign Out Success');
export const signOutFailure = createAction('[Auth] Sign Out Failure', props<{ error: any }>());