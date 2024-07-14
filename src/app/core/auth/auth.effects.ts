// src/app/store/effects/auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { mergeMap, tap } from 'rxjs/operators';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { UserResponse } from '@supabase/supabase-js';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions, 
    private supabaseService: SupabaseService, 
    private router: Router
  ) {}

  checkAuthState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AuthActions.checkAuthState,
        AuthActions.signInWithMagicLinkSuccess
      ),
      mergeMap(() =>
        this.supabaseService.getUser().then((res: UserResponse) => {
          if (res.data.user) {
            return AuthActions.checkAuthStateSuccess({ user: res.data.user });
          } else {
            return AuthActions.checkAuthStateFailure({ error: 'Not authenticated' });
          }
        })
      )
    )
  );

  signInWithPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInWithPassword),
      mergeMap((action) =>
        this.supabaseService.signInWithPassword(action.email, action.password).then(({ data, error }) => {
          if (data) {
            console.log(data);
            return AuthActions.signInWithPasswordSuccess({ user: data.user });
          } else {
            return AuthActions.signInWithPasswordFailure({ error });
          }
        })
      )
    )
  );

  signInSendMagicLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInSendMagicLink),
      tap((action) =>
        this.supabaseService.signInWithOtp(action.email).then(({ data, error }) => {
          if (data) {
            console.log(data);
          } else {
            console.error(error);
          }
        })
      )
    ),
    { dispatch: false }
  );

  signInConfirmMagicLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInConfirmMagicLink),
      mergeMap((action) =>
        this.supabaseService.signInVerifyOtp({token_hash: action.token_hash, type: 'magiclink'}).then(({ data, error }) => {
          if (data) {
            console.log(action.token_hash);
            return AuthActions.signInWithMagicLinkSuccess({ user: data.user });
          } else {
            return AuthActions.signInWithMagicLinkFailure({ error });
          }
        })
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      mergeMap((action) =>
        this.supabaseService.signUp(action.email, action.password).then(({ data, error }) => {
          if (data) {
            return AuthActions.signUpSuccess({ user: data.user });
          } else {
            return AuthActions.signUpFailure({ error });
          }
        })
      )
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      mergeMap(() =>
        this.supabaseService.signOut().then(({ error }) => {
          if (!error) {
            this.router.navigateByUrl('/login')

            return AuthActions.signOutSuccess();
          } else {
            return AuthActions.signOutFailure({ error });
          }
        })
      )
    )
  );

  redirectHome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AuthActions.signInWithPasswordSuccess, 
        AuthActions.signUpSuccess, 
        AuthActions.checkAuthStateSuccess, 
        AuthActions.signInWithMagicLinkSuccess
      ),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ),
    { dispatch: false }
  );
}