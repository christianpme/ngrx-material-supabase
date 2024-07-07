import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../core/auth/auth.reducer';
import { map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public title$: Observable<string> = of('starter-v1');

  public status$?: Observable<any>

  items = [
    { title: 'Logout', link: '/logout' },
    { title: 'Register', link: '/sign-up' },
    //{ title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    //{ title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    //{ title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ];

  constructor(private store: Store<{ auth: AuthState }>) {
    this.title$ = this.store.select('auth').pipe(map(auth => auth.user.email));

    this.status$ = this.store.select('auth');
  }


}
