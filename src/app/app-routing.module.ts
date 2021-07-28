import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListadoComponent } from './listado/listado.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes:Routes = [
  {path:'listado', component:ListadoComponent},
  {path:'acerca', component:AcercaDeComponent},

  {path:'', redirectTo:'/listado', pathMatch:'full'},
  {path:'**', component:PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
