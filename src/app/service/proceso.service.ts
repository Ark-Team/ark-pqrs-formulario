import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { proceso } from '../domain/Proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'proceso/';
  }

  public findAll(areaId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByArea/' + areaId);
  }

  public findAllByCompania(usuId: String): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + usuId);
  }
  public save(proceso: proceso): Observable<any> {
    return this.httpClient.post(this.url + 'save', proceso);
  }
  public update(proceso: proceso): Observable<any> {
    return this.httpClient.put(this.url + 'update', proceso);
  }
  public cambioEstado(proceso: proceso): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', proceso);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}