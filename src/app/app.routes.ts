// hoopi_io/src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Redireciona a rota base para a página de login
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  // NOVA ROTA: Adicione a rota para a página Agenda
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then(m => m.AgendaPage)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];