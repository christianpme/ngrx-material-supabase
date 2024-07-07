import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signOut } from '../../auth.actions';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [],
  template: ``,
})
export class SignOutComponent {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(signOut());
  }
}
