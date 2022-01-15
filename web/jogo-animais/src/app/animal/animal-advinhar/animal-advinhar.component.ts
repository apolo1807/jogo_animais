import { Component, OnInit } from '@angular/core';
import { AnimalModel } from '../animal-model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-advinhar',
  templateUrl: './animal-advinhar.component.html',
  styleUrls: ['./animal-advinhar.component.css']
})
export class AnimalAdvinharComponent implements OnInit {

  animalSelecionado: AnimalModel;
  sim: number = 1;
  nao: number;
  repetiu: boolean;

  identificador:number[] = [];
  repetido: number[] = [0];

  constructor(private _service: AnimalService) { }

  ngOnInit() {
    this.getAnimais();
  }

  getAnimais() {
    this._service.getAnimais().subscribe(animais => {

      let quantidadeAnimais: number = 0;

      for(let i = 0; i < animais.length; i++) {
        quantidadeAnimais = i;
      }

      let selecionarAleatoriamente = this.getRandomAnimal(quantidadeAnimais);

      animais.forEach(animal => {

        this.identificador.push(animal.id);

        if(this.identificador[selecionarAleatoriamente] === animal.id) {
          this.animalSelecionado = animal;
          this.repetido.push(animal.id);
        }

      })

      console.log(selecionarAleatoriamente);

      console.log(this.repetido);
      console.log(this.animalSelecionado);

    });
  }

  getRandomAnimal(max:number) {
    return Math.floor(Math.random() * (max + 1));
  }

  respostaSim() {
    this.sim ++;
  }

  respostaNao() {
    this.getAnimais();
  }

  jogarNovamente() {
    window.location.reload();
  }
}
