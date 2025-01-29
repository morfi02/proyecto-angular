import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GifsModule } from './gifs/gifs.module';
import { BuscadorModule } from './buscador/buscador.module';

import { AppComponent } from './app.component';

@NgModule({
 declarations: [
  AppComponent
 ],
 imports: [
    BrowserModule,
    HttpClientModule,
    BuscadorModule,
    GifsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
