import { environment } from 'src/enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly api: string

  constructor(private http: HttpClient)
  {
    this.api = `${environment.apiURL}`
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getOrder(): Observable<Order[]>{
    return this.http
      .get<Order[]>(this.api+'/orders')
      .pipe(retry(1), catchError(this.handleError));
  }

  createOrder(order: Order): Observable<Order> {
    return this.http
      .post<Order>(
        this.api + '/orders',
        JSON.stringify(order),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateOrder(id:string,order:Order): Observable<Order>{
    return this.http
      .put<Order>(
        `${this.api}/orders/${id}`,
        JSON.stringify(order),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getOne(id:any): Observable<Order>{
    return this.http.get<Order>(`${this.api}/orders/${id}`).pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployee(id:any) {
    return this.http
      .delete<Order>(`${this.api}/orders/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
