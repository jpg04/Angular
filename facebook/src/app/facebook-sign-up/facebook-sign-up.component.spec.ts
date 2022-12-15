import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSignUpComponent } from './facebook-sign-up.component';

describe('FacebookSignUpComponent', () => {
  let component: FacebookSignUpComponent;
  let fixture: ComponentFixture<FacebookSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
