import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { signInSendMagicLink } from '../../auth.actions';

@Component({
  selector: 'app-sign-in-with-magic-link',
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
  ],
  templateUrl: './sign-in-with-magic-link.component.html',
  styleUrl: './sign-in-with-magic-link.component.scss'
})
export class SignInWithMagicLinkComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log('test: ' + this.loginForm.valid);
    if (this.loginForm.valid) {
      // Handle login logic here
      this.store.dispatch(signInSendMagicLink(this.loginForm.value));
    }
  }
}
