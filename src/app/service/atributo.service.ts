import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtributoService {

  public url: string;
  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'atributo/';
  }

  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}
