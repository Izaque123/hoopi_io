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
  
  // NOVA ROTA PARA A PÁGINA DE LISTAGEM DE VIAGENS
  {
    path: 'travel-list',
    loadComponent: () => import('./travel-list/travel-list.page').then(m => m.TravelListPage)
  },
];
