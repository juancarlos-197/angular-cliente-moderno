import { Routes } from '@angular/router';

export const routes: Routes = [
     {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home').then(h => h.Home)
    },
     {
        path: 'user',
        loadComponent: () =>
            import('./pages/user/user').then(u => u.User)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
