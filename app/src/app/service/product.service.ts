import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private api = `${environment.apiURL}/product/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.api)
  }

  getProductById(id: any): Observable<any> {
    return this.http.get(this.api + `${id}`)
  }

  update(body: any): Observable<any> {
    return this.http.put(this.api, body, this.httpOptions);
  }

  save(body: any): Observable<any> {
    return this.http.post(this.api, body, this.httpOptions);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(this.api + `${id}`)
  }
}
