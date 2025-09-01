import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css'
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []);
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.inicializarLivro();
  }

  inicializarLivro(): void {
    this.livro = new Livro(0, 0, '', '', []);
    this.autoresForm = '';
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').filter(autor => autor.trim() !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

  voltar = (): void => {
    this.router.navigateByUrl('/lista');
  }
}
