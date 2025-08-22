import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarClass } from './lugar-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  constructor(private http: HttpClient) {}
  
  salvar(lugar: LugarClass) : Observable<LugarClass> {
    return this.http.post<LugarClass>('http://localhost:3000/lugares', lugar)
  }

  obterTodos(): Observable<LugarClass[]>{
    return this.http.get<LugarClass[]>('http://localhost:3000/lugares')
  }
}
