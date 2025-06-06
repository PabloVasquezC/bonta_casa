import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { DishesPage } from './dishes-page/dishes-page';
import { ReservationsPage } from './reservations-page/reservations-page';
import { AdminsPage } from './admins-page/adminspage';

export const routes: Routes = [

  {
    path: '',
    component: HomePage
  },
  {
    path: 'platos',
    component: DishesPage
  },
  {
    path: 'reservas',
    component: ReservationsPage
  },
  {
    path: 'admins',
    component: AdminsPage
  }
];
