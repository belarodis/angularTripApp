import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarClass } from './lugar-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http: HttpClient) {}

  salvar(lugar: LugarClass): Observable<LugarClass> {
    return this.http.post<LugarClass>('http://localhost:3000/lugares', lugar);
  }

  obterTodos(): Observable<LugarClass[]> {
    return this.http.get<LugarClass[]>('http://localhost:3000/lugares');
  }

  filtrar(nome: string, categoria: string): Observable<LugarClass[]> {
    const parametros = new HttpParams();
    if (nome) {
      parametros.set('nome_like', nome);
    }
    if (categoria) {
      parametros.set('categoria', categoria);
    }

    return this.http.get<LugarClass[]>('http://localhost:3000/lugares', {
      params: parametros,
    });
  }
}
