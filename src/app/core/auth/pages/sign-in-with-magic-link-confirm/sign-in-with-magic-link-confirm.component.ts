import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signInConfirmMagicLink } from '../../auth.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in-with-magic-link-confirm',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-with-magic-link-confirm.component.html',
  styleUrl: './sign-in-with-magic-link-confirm.component.scss'
})
export class SignInWithMagicLinkConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const token_hash = this.route.snapshot.queryParams['token_hash'];

    this.store.dispatch(signInConfirmMagicLink({ token_hash }));
  }

}
