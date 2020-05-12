import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Formulario } from '../domain/Formulario';
import { Pqrs } from '../domain/Pqrs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'formulario/';
  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }

  public findById(idFromulario: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + idFromulario);
  }

  public findAllByCompania(idCompania: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + idCompania);
  }

  public save(pqrs: Pqrs): Observable<any> {
    return this.httpClient.post(environment.url + 'pqrs/' + 'save', pqrs);
  }
}
