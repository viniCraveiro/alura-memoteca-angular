import { IPensamento } from './../pensamento/pensamento';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent {

  listaPensamentos: Array<IPensamento> = [
    {
      conteudo: "Conteudo Pensamento 1",
      autoria: "Autor Pensamento 1",
      modelo: "modelo3",
    },
    {
      conteudo: "Conteudo Pensamento 2",
      autoria: "Autor Pensamento 2",
      modelo: "modelo2",
    }
  ];

}
