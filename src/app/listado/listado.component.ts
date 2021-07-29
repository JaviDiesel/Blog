import { Component, OnInit } from '@angular/core';
import { Entrada } from '../interfaces/entrada';
import { EntradaService } from '../services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas:any;

  constructor(private entradaService:EntradaService) { 
    this.listadoEntradas = [];
  }

  public mostrarTitulo(titulo:string):void  {
    alert(`Entrada seleccionada: ${titulo}`);
  }

  private recuperarEntradas():void {
    this.entradaService.recuperarObservableEntradas().subscribe((data:Entrada) => {
      this.listadoEntradas = data;
    },(error:any) =>  {
      console.log(error);
    },() => {
      console.log('peticion finalizada');
    })
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

}
