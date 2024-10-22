import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './core/auth/auth.reducer';
import { AuthEffects } from './core/auth/auth.effects';
import { SupabaseService } from './core/supabase.service';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    SupabaseService,
    provideStore({ auth: authReducer }),
    provideEffects([AuthEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ],
};
