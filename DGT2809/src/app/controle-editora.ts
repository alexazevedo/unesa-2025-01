import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Bookman' },
    { codEditora: 3, nome: 'Addison Wesley' },
    { codEditora: 4, nome: 'Pearson' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(editora => editora.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : '';
  }
}
