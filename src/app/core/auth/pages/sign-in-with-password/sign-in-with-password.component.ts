import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { signInWithPassword } from '../../auth.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-with-password.component.html',
  styleUrl: './sign-in-with-password.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule
  ]
})
export class SignInWithPasswordComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login logic here
      this.store.dispatch(signInWithPassword(this.loginForm.value));
    }
  }
}
