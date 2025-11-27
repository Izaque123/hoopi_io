import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // <-- ALTERADO para redirecionar para a tela de login
    pathMatch: 'full',
  },
  {
    path: 'login', // <-- NOVA ROTA: Adiciona o caminho para a tela de login
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];