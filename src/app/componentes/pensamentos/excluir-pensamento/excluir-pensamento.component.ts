import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento?: IPensamento;

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPensamento(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    this.service.deletePensamento(this.pensamento?.id!).subscribe({
      next: () => {
        this.router.navigate(['/listarpensamentos'])
      }, error: (e:Error)=>{
        console.error('Deu pau:', e);

      }
    }
    )
  }

  cancelar() {
    this.router.navigate(['/listarpensamentos'])
  }


}
