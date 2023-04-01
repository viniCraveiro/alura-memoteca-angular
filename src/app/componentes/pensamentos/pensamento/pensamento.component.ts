import { Component, Input, Output } from '@angular/core';
import { IPensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})


export class PensamentoComponent {

  @Input()
  pensamento: IPensamento = {
    conteudo: "I love",
    autoria: "Vinicius",
    modelo: "modelo3",
  }


}
