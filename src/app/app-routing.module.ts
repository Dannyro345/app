import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-alunos', loadChildren: './lista-alunos/lista-alunos.module#ListaAlunosPageModule' },
  { path: 'aluno-detail', loadChildren: './aluno-detail/aluno-detail.module#AlunoDetailPageModule' },
  { path: 'novo-aluno-modal', loadChildren: './novo-aluno-modal/novo-aluno-modal.module#NovoAlunoModalPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
