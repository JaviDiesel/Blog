import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private http:HttpClient) { }

  public recuperarObservableEntradas():Observable<Entrada>  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
