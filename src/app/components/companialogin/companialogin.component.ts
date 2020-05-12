import { Component, OnInit } from '@angular/core';
import { Compania } from 'src/app/domain/Compania';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CompaniaService } from 'src/app/service/compania.service';

@Component({
  selector: 'app-companialogin',
  templateUrl: './companialogin.component.html',
  styleUrls: ['./companialogin.component.css']
})
export class CompanialoginComponent implements OnInit {

  public companias: Compania[];
  public idAux: string;

  constructor(public router: Router, public matSnackBar: MatSnackBar, public companiaService: CompaniaService) { }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  ngOnInit() {
    this.loadCompañias();
  }
  public getIdSelected(id: string) {
    this.idAux = id;
  }
  public loadFormulario() {
    this.companiaService.findById(this.idAux).subscribe(data => {
      localStorage.setItem('Compania', JSON.stringify(data));
      redireccionar();
    })
  }
  public loadCompañias() {
    this.companiaService.findAll().subscribe(data => {
      this.companias = data;
    });
  }
}
function redireccionar() {
  setTimeout("location.href='/formulario'", 800);
}
