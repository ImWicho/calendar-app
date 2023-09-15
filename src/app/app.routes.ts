import { Routes } from '@angular/router';

export const routes: Routes = [
  {
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.routes'),
	},
  {
    path: '',
    redirectTo: 'dashboard/calendar',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard/calendar',
    pathMatch: 'full'
  }
];
