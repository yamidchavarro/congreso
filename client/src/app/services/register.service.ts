import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_ENDPPOINT = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) {
  }


  public postData(url: string, user) {
    return this.http.post(this.API_ENDPPOINT + url, user);
  }
  public getData(url: string): Observable<any> {
    return this.http.get(this.API_ENDPPOINT + url);
  }
}
