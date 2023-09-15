import { Route } from '@angular/router'

export default [
  {
    path: '',
    loadComponent: () => import('./dashboard.component'),
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./pages/calendar-page/calendar-page.component'),
      },
    ]
  }
] as Route[]
