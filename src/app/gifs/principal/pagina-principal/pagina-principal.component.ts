import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/servicio/gifs.service';
@Component({
 selector: 'gifs-pagina-principal',
 templateUrl: './pagina-principal.component.html',
 styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
 constructor( private gifsService: GifsService) {}
 get gifs(): Gif[] {
 return this.gifsService.gifList;
 }
}