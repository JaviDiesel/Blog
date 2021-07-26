import { Component, OnInit } from '@angular/core';
import { Entrada } from '../interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas:Entrada[];

  constructor() { 
    this.listadoEntradas = [
      {
        titulo:'Introducción a Angular',
        resumen:'En esta lección realizaremos una breve introducción al mundo del desarrollo con Angular'
      },
      {
        titulo:'Typescript para Angular',
        resumen:'Recorrido por Typescript como lenguaje para Angular'
      },
      {
        titulo:'Componentes en Angular',
        resumen:'Aprenderemos el uso de componentes y su importancia'
      }
    ]
  }

  public mostrarTitulo(titulo:string):void  {
    alert(`Entrada seleccionada: ${titulo}`);
  }

  ngOnInit(): void {
  }

}
