import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './principal/pagina-principal/pagina-principal.component';
import { CajaBusquedaComponent } from './components/caja-busqueda/caja-busqueda.component';
import { ListaComponent } from './components/lista/lista.component';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    CajaBusquedaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaPrincipalComponent,
    ListaComponent
  ]
})
export class GifsModule { }
