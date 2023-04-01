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
    id: 1,
    conteudo: "I love",
    autoria: "Vinicius",
    modelo: "modelo3",
  }

  larguraPensamento(){
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }


}
