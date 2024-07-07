import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './core/auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './core/auth/pages/sign-in/sign-in.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { SignOutComponent } from './core/auth/pages/sign-out/sign-out.component';

export const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'logout', component: SignOutComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: ''}
  ];
