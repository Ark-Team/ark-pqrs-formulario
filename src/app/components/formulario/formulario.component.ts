import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/domain/Formulario';
import { Cliente } from 'src/app/domain/Cliente';
import { Pqrs } from 'src/app/domain/Pqrs';
import { Compania } from 'src/app/domain/Compania';
import { FormularioService } from 'src/app/service/formulario.service';
import { AtributoFormularioService } from 'src/app/service/atributo-formulario.service';
import { AtributoService } from 'src/app/service/atributo.service';
import { AreasService } from 'src/app/service/areas.service';
import { ProcesoService } from 'src/app/service/proceso.service';
import { proceso } from 'src/app/domain/proceso';
import { Area } from 'src/app/domain/Area';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public asunto: boolean;
  public celular: boolean;
  public cuidad: boolean;
  public departamento: boolean;
  public direccion: boolean;
  public fax: boolean;
  public identificacion: boolean;
  public lugar: boolean;
  public flag: boolean = false;

  public areas: Area[];
  public procesos: proceso[];
  public idAreaAux: string;
  public idAux: string;
  public formulario: Formulario;
  public cliente: Cliente;
  public pqrs: Pqrs;
  public compania: Compania;
  public formulario2: Formulario;
  public atributos: string[] = [];

  constructor(public formularioService: FormularioService, public matSnackBar: MatSnackBar, 
              public atributoFormularioService: AtributoFormularioService, public atributoService: AtributoService,  
              public areaService: AreasService, public procesoService: ProcesoService, public router: Router) {
    this.formulario = new Formulario("", new Date, new Date, "", "", "", "", "");
    this.cliente = new Cliente(null, "", "", null);
    this.pqrs = new Pqrs("", null, "", "", "", "", "", "", null, new Date, new Date, null, "", "", "", null, null, "", "", "", "", "", "", "", "");
  }

  ngOnInit() {
    this.getCompania();
    this.getAttributes();
    this.findById();
    this.loadListArea();
    this.cambioEstado();
  }

  public getCompania(): Compania {
    return this.compania = JSON.parse(localStorage.getItem('Compania'));
  }
  public getAreaIdSelected(id: string) {
    this.idAreaAux = id;
    this.loadListProceso();
  }

  public getIdSelected(id: string) {
    this.idAux = id;
  }
  public async getAttributes() {
    this.atributoFormularioService.findAllByCompania(this.compania.compId).subscribe(data => {
      for (const atrformId in data) {
        const element = data[atrformId];
        this.atributos.push(element.atriId_Atributo);
      }
      console.log(this.atributos.length);
      this.cambioEstado();
      //Estos son atributos de la tabla, toca por compañia
    })
  }

  public loadListProceso() {
    this.procesoService.findAll(this.idAreaAux).subscribe(data => {
      this.procesos = data;
    });
  }
  public loadListArea() {
    this.areaService.findAll(this.compania.compId).subscribe(data => {
      this.areas = data;
    });
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  public findById() {
    this.formularioService.findById(this.compania.compId).subscribe(data => {
      this.formulario2 = data;
    });
  }

  public save() {
    this.pqrs.compId_Compania = this.compania.compId;
    this.pqrs.prosId_Proceso = this.idAux;
    this.pqrs.areaId_Area = this.idAreaAux;
    this.pqrs.tpqrsId_TipoPqrs = "1";
    this.pqrs.formId_Formulario = this.formulario2.formId;
    console.log(this.formulario2.formId);
    this.formularioService.save(this.pqrs).subscribe(data => {
      this.openMatSnackBar('La petición se ha realizado con exito.', 'Info');
      this.redireccionar("compania")

    }, error => {
      this.openMatSnackBar("Formulario inválido, por favor verifique.", 'Error');
    });
  }
  public cambioEstado() {
    for (let index = 0; index < this.atributos.length; index++) {
      switch (this.atributos[index]) {
        case "1":
          this.celular = true;
          break;
        case "2":
          this.direccion = true;
          break;
        case "3":
          this.cuidad = true;
          break;
        case "4":
          this.identificacion = true;
          break;
        case "5":
          this.asunto = true;
          break;
        case "6":
          this.departamento = true;
          break;
        case "7":
          this.lugar = true;
          break;
        case "8":
          this.fax = true;
          break;
      }
    }
  }

  redireccionar(ruta: String) {
    setTimeout(() => {
      this.router.navigate([ruta]);
    }, 1000)
  }

}
