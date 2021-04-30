import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MakePayment } from './pages/models/make-payment.model';
import { EmpList } from './pages/models/get-emp-list';
import { ResponseType } from './pages/models/response.model';
import { PaymentList } from './pages/models/get-payment.model';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://localhost:44365/api/v1/';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<ResponseType<EmpList[]>> {
    const url  = this.apiURL + 'Employee/Get';
    return this.http.get<ResponseType<EmpList[]>>(url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getPayment(id): Observable<ResponseType<PaymentList[]>> {
    return this.http.get<ResponseType<PaymentList[]>>(this.apiURL + 'Payment/Get?clientCode=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  makePayment(createPayment : MakePayment): Observable<any> {
        const url = this.apiURL + 'PaymentRequest/PaymentRequest';
    return this.http.post<MakePayment>(url, JSON.stringify(createPayment), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

 

 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}