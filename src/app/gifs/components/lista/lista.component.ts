import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
@Component({
 selector: 'gifs-lista',
 templateUrl: './lista.component.html',
 styleUrls: ['./lista.component.css']
})
export class ListaComponent {
 @Input()
 public gifs: Gif[] = [];
}