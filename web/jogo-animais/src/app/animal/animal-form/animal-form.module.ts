import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalFormComponent } from './animal-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: AnimalFormComponent },
];

@NgModule({
  declarations: [AnimalFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimalFormModule { }
