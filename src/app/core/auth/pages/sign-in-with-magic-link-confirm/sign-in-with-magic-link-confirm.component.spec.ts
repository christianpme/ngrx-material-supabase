import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithMagicLinkConfirmComponent } from './sign-in-with-magic-link-confirm.component';

describe('SignInWithMagicLinkConfirmComponent', () => {
  let component: SignInWithMagicLinkConfirmComponent;
  let fixture: ComponentFixture<SignInWithMagicLinkConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithMagicLinkConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInWithMagicLinkConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
