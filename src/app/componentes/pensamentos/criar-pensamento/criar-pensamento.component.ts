import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IPensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {


  pensamento: IPensamento = {
    conteudo: "",
    autoria: "",
    modelo: "",
  }

  constructor(private route : Router, private service: PensamentoService){}

  criarPensamento() {
    this.service.createPensamento(this.pensamento).subscribe({
      next: ()=> {
        this.route.navigate(["/listarpensamentos"]);
      }
    });
  }

  cancelar() {
    this.route.navigate(["../"]);
  }

}
