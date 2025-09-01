import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista';
import { LivroDadosComponent } from './livro-dados/livro-dados';

export const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];
