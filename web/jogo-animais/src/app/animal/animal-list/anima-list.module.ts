import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { AnimalService } from '../animal.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'new', component: AnimalFormComponent },
  { path: ':id', component: AnimalFormComponent }
];

@NgModule({
  declarations: [AnimalListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AnimalService
  ]
})
export class AnimaListModule { }
