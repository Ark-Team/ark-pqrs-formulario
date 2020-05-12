import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Estado } from '../domain/Estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'estado/';
  }

  public save(estado: Estado): Observable<any> {
    return this.httpClient.post(this.url + 'save', estado);
  }

  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
  public update(estado: Estado): Observable<any> {
    return this.httpClient.put(this.url + 'update', estado);
  }
  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }
}
