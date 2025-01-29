import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/servicio/gifs.service';
@Component({
 selector: 'buscador-barra-lateral',
 templateUrl: './barra-lateral.component.html',
 styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
 constructor(private gifsService: GifsService){}
 get tags(): string[]{
 return this.gifsService.tagHistory;
 }
  searchTag(tag:string):void {
 this.gifsService.searchTag(tag);
 }
}

