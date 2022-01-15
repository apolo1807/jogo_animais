import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalAdvinharComponent } from './animal-advinhar.component';
import { Etapa1Component } from './etapa1/etapa1.component';

export const routes: Routes = [
  { path: '', component: Etapa1Component },
  { path: 'start', component: AnimalAdvinharComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [AnimalAdvinharComponent],
  declarations: [
    AnimalAdvinharComponent,
    Etapa1Component
  ],
  providers: [],
})
export class AnimalAdvinharModule { }
