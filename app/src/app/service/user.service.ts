import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {
    headers: this.httpHeaders
  };

  login(payload: Object) {
    return this.http.post<any>(`http://localhost:8080/login`, payload, this.options);
  }
}
