import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonComponent } from './home-page/iniciar/button.component';
import { AnimalFormModule } from './animal/animal-form/animal-form.module';
import { AnimaListModule } from './animal/animal-list/anima-list.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimalAdvinharModule } from './animal/animal-advinhar/animal-advinhar.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AnimalFormModule,
    AnimaListModule,
    AnimalAdvinharModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
