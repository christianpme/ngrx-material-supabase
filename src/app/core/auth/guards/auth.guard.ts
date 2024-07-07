import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AuthState } from '../auth.reducer';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const store = inject(Store<{ auth: AuthState }>);
  const router = inject(Router);
  return store.select('auth').pipe(
    take(1),
    map((authState) => {
      console.log(authState);
      if (authState.user) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
}