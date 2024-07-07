import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signIn } from '../../auth.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email = '';
  password = '';

  constructor(private store: Store) {
  }

  onSubmit(event: Event) {
    this.store.dispatch(signIn({ email: this.email, password: this.password }));
  }
}
