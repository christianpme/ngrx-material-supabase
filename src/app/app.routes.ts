import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './core/auth/pages/sign-up/sign-up.component';
import { SignInWithPasswordComponent } from './core/auth/pages/sign-in-with-password/sign-in-with-password.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { SignOutComponent } from './core/auth/pages/sign-out/sign-out.component';
import { SignInWithMagicLinkComponent } from './core/auth/pages/sign-in-with-magic-link/sign-in-with-magic-link.component';
import { SignInWithMagicLinkConfirmComponent } from './core/auth/pages/sign-in-with-magic-link-confirm/sign-in-with-magic-link-confirm.component';

export const routes: Routes = [
  { path: 'login', component: SignInWithPasswordComponent },
  { path: 'login-with-magic-link', component: SignInWithMagicLinkComponent },
  { path: 'auth/confirm', component: SignInWithMagicLinkConfirmComponent },
  { path: 'logout', component: SignOutComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: ''}
  ];
