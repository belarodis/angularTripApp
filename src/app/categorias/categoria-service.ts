import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  salvar(categoria: Categoria) : Observable<Categoria> {
    /* sempre assíncrono, ne não deve ser, declarar */
    return this.http.post<Categoria>('http://localhost:3000/categorias', categoria);
  }

  obterCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3000/categorias')
  }
}
