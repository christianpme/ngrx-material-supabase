// src/app/store/effects/auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { UserResponse } from '@supabase/supabase-js';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private supabaseService: SupabaseService, private router: Router) {}

  checkAuthState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuthState),
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

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      mergeMap((action) =>
        this.supabaseService.signIn(action.email, action.password).then(({ data, error }) => {
          if (data) {
            console.log(data);
            return AuthActions.signInSuccess({ user: data.user });
          } else {
            return AuthActions.signInFailure({ error });
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
      ofType(AuthActions.signInSuccess, AuthActions.signUpSuccess, AuthActions.checkAuthStateSuccess),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ),
    { dispatch: false }
  );
}