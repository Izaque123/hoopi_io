import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', 
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then(m => m.AgendaPage)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'role-selection',
    loadComponent: () =>
      import('./roleSelection/roleSelection.page').then((m) => m.RoleSelectionPage),
  },
  {
    path: 'register-passenger',
    loadComponent: () => import('./registerPassenger/registerPassenger.page').then((m) => m.RegisterPassengerPage)
  },
  {
    path: 'register-driver',
    loadComponent: () => import('./register-driver/register-driver.page').then( m => m.RegisterDriverPage)
  },
  {
    path: 'register-vehicle',
    loadComponent: () => import('./register-vehicle/register-vehicle.page').then( m => m.RegisterVehiclePage)
  },
  {
    path: 'register-travel',
    loadComponent: () => import('./register-travel/register-travel.page').then( m => m.RegisterTravelPage)
  },  {
    path: 'settings-driver',
    loadComponent: () => import('./settings-driver/settings-driver.page').then( m => m.SettingsDriverPage)
  },
  {
    path: 'settings-passenger',
    loadComponent: () => import('./settings-passenger/settings-passenger.page').then( m => m.SettingsPassengerPage)
  },


];