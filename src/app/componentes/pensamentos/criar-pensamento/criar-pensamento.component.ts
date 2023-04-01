import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {


  pensamento = {
    id: "",
    conteudo: "",
    autoria: "",
    modelo: "",
  }

  constructor(private route : Router){}

  criarPensamento() {

  }

  cancelar() {
    this.route.navigate(["../"])
  }

}
