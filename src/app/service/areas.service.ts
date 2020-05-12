import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Area } from '../domain/Area';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'area/';
  }

  public findAll(compId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + compId);
  }

  public save(area: Area): Observable<any> {
    return this.httpClient.post(this.url + 'save', area);
  }
  public update(area: Area): Observable<any> {
    return this.httpClient.put(this.url + 'update', area);
  }
  public cambioEstado(area: Area): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', area);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }

}
