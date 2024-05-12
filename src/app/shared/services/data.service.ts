import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getDataWithoutHeader<T>(url: string) {

    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }


  // public postDataWithoutHeader<T>(url: string, toAdd: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };
  //   return this.http.post(url, toAdd, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }


  // Can create all types of api for with auth token and with auth token in this file

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error}`);
    }
    return throwError(error);
  }
}
