import { Component, OnInit } from '@angular/core';
import { IPensamento } from './../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit{
  listaPensamentos: Array<IPensamento> = [];

  constructor(private pensamentoService: PensamentoService){}

  ngOnInit(): void {
    this.getPensamentos();
  }

  getPensamentos(){
    this.pensamentoService.listPensamentos().subscribe({
      next: value => {
        this.listaPensamentos = value;
      }
    })
  }


}
