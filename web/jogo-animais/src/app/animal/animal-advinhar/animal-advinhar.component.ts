import { Component, OnInit } from '@angular/core';
import { AnimalModel } from '../animal-model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-advinhar',
  templateUrl: './animal-advinhar.component.html'
})
export class AnimalAdvinharComponent implements OnInit {

  animalSelecionado: AnimalModel;
  selecionarAleatoriamente: number = 0;
  acertou: number = 1;
  errou: number = 0;
  identificador:number[] = [];
  repetido: number[] = [];

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

      this.selecionarAleatoriamente = this.getRandomAnimal(quantidadeAnimais);

      while(this.repetido.includes(this.selecionarAleatoriamente)) {
        this.selecionarAleatoriamente = this.getRandomAnimal(quantidadeAnimais);
      }

      this.repetido.push(this.selecionarAleatoriamente);

      animais.forEach(animal => {

        this.identificador.push(animal.id);

        if(this.identificador[this.selecionarAleatoriamente] === animal.id) {
          this.animalSelecionado = animal;
        }

      })
    });
  }

  getRandomAnimal(max:number) {
    return Math.floor(Math.random() * (max + 1));
  }

  respostaSim() {
    this.acertou ++;
  }

  respostaNao() {
    this.errou ++;
    this.getAnimais();
  }

  jogarNovamente() {
    this.getAnimais();
    this.acertou = 1;
    this.errou = 0;
    this.repetido = [];
  }
}
