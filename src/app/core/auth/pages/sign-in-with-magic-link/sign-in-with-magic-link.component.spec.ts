import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithMagicLinkComponent } from './sign-in-with-magic-link.component';

describe('SignInWithMagicLinkComponent', () => {
  let component: SignInWithMagicLinkComponent;
  let fixture: ComponentFixture<SignInWithMagicLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithMagicLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInWithMagicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
