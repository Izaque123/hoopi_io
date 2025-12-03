import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterDriverPage } from './register-driver.page';

describe('RegisterDriverPage', () => {
  let component: RegisterDriverPage;
  let fixture: ComponentFixture<RegisterDriverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
