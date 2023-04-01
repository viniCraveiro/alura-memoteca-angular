import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes =
[
  {path: '', redirectTo: '/listarpensamentos', pathMatch: 'full'},
  {path: 'listarpensamentos', component: ListarPensamentoComponent},
  {path: 'criarpensamento', component: CriarPensamentoComponent},
  {path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
  {path: 'editarpensamento/:id', component: EditarPensamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
