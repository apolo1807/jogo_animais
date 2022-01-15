import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonComponent } from './home-page/iniciar/button.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'iniciar', component: ButtonComponent },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal-list/anima-list.module').then(m => m.AnimaListModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./animal/animal-advinhar/animal-advinhar.module').then(m => m.AnimalAdvinharModule)
  },
  { path: '', redirectTo: '/iniciar', pathMatch: 'full' },
  { path: '**', component: ButtonComponent },
]
