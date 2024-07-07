import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from '../../auth.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  email!: string;
  password!: string;

  constructor(private store: Store) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.store.dispatch(signUp({ email: this.email, password: this.password }));
  }
}
