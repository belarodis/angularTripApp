import { Component, OnInit } from '@angular/core';
import { LugarClass } from '../../lugares/lugar-class';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar-service';
import { CategoriaService } from '../../categorias/categoria-service';

@Component({
  selector: 'app-galeria-component',
  standalone: false,
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.scss',
})
export class GaleriaComponent implements OnInit {
  listaLugares: LugarClass[] = [];
  categoriasFiltro: Categoria[] = [];

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.obterTodos().subscribe({
      next: (categorias) => (this.categoriasFiltro = categorias),
      error: (erro) => console.error('Ocorreu um erro: ', erro),
    });

    this.lugarService.obterTodos().subscribe({
      next: (lugares) => (this.listaLugares = lugares),
    });
  }

  getEstrelas(lugar: LugarClass): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }
}
