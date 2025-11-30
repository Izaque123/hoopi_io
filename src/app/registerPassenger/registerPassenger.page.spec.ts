import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPassengerPage } from './registerPassenger.page';

describe('RegisterPassengerPage', () => {
  let component: RegisterPassengerPage;
  let fixture: ComponentFixture<RegisterPassengerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
