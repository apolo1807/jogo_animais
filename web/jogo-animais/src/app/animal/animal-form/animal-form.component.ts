import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iif, Observable } from 'rxjs';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html'
})
export class AnimalFormComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private _service: AnimalService,
    private builder: FormBuilder,
    private router: Router,
    private _activated: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.createForm();

    const params:Observable<Params> = this._activated.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this._service.findById(this.id).subscribe(values => {
          this.form.setValue(values);
        })
      }
    });
  }

  createForm():FormGroup {

    const form = this.builder.group({
      id: [''],
      nome: [''],
      caracteristica: [''],
      caracteristica2: ['']
    });

    return form;
  }

  salvar() {
    this._service.salvarAnimal(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/animal')
    });
  }

}
