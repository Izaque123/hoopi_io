import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPassengerPage } from './settings-passenger.page';

describe('SettingsPassengerPage', () => {
  let component: SettingsPassengerPage;
  let fixture: ComponentFixture<SettingsPassengerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
