import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento!: IPensamento;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPensamento(parseInt(id!)).subscribe((pensamento)=> {
      this.pensamento = pensamento;
    })
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}

  editarPensamento(){
    this.service.editPensamento(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarpensamentos'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarpensamentos'])
  }


}
