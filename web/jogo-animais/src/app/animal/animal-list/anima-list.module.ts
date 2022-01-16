import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { AnimalService } from '../animal.service';
import { NgxPaginationModule, PaginatePipe, PaginationControlsDirective } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'new', component: AnimalFormComponent },
  { path: ':id', component: AnimalFormComponent }
];

@NgModule({
  declarations: [AnimalListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [AnimalService]
})
export class AnimaListModule { }
