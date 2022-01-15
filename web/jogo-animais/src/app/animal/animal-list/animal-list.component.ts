import { Component, OnInit } from '@angular/core';
import { AnimalModel } from '../animal-model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html'
})
export class AnimalListComponent implements OnInit {

  animais: AnimalModel[];
  animalModal: AnimalModel;
  inicializar: AnimalModel;

  deletado: boolean = false;

  constructor(private _service: AnimalService) {
    this.inicializar = new AnimalModel();
  }

  ngOnInit() {
    this.getAnimais();
  }

  getAnimais() {
    this._service.getAnimais().subscribe(animais => {
      this.animais = animais;
    });
  }

  deletar(animal: AnimalModel) {
    this._service.deletarAnimal(animal).subscribe(() => {

      this.deletado = true;
      setTimeout(() => {
        this.deletado = false;
      }, 2000)

      this.getAnimais();
    });
  }

}
