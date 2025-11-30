import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterVehiclePage } from './register-vehicle.page';

describe('RegisterVehiclePage', () => {
  let component: RegisterVehiclePage;
  let fixture: ComponentFixture<RegisterVehiclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
