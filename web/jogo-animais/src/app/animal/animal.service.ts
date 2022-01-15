import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalModel } from './animal-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  url: string = environment.animalUrl;

  constructor(private httpClient: HttpClient) { }

  salvarAnimal(animal: AnimalModel):Observable<AnimalModel> {
    return this.httpClient.post<AnimalModel>(`${this.url}/new`, animal);
  }

  getAnimais():Observable<AnimalModel[]> {
    return this.httpClient.get<AnimalModel[]>(this.url);
  }

  deletarAnimal(animal: AnimalModel):Observable<AnimalModel> {
    return this.httpClient.delete<AnimalModel>(`${this.url}/${animal.id}`);
  }

  findById(id: number):Observable<AnimalModel>{
    return this.httpClient.get<AnimalModel>(`${this.url}/${id}`);
  }

}
