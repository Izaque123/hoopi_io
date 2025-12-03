import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsDriverPage } from './settings-driver.page';

describe('SettingsDriverPage', () => {
  let component: SettingsDriverPage;
  let fixture: ComponentFixture<SettingsDriverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
