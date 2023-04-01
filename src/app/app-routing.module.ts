import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path: '', redirectTo: '/listarpensamentos', pathMatch: 'full'},
  {path: 'listarpensamentos', component: ListarPensamentoComponent},
  {path: 'criarpensamento', component: CriarPensamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
