import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTravelPage } from './register-travel.page';

describe('RegisterTravelPage', () => {
  let component: RegisterTravelPage;
  let fixture: ComponentFixture<RegisterTravelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
