import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccessComponent } from './loginsuccess.component';

describe('LoginsuccessComponent', () => {
  let component: LoginsuccessComponent;
  let fixture: ComponentFixture<LoginsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginsuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
