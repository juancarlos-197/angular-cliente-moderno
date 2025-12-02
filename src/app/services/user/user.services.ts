import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse';
import { Users } from '../../interfaces/users';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   constructor(private http:HttpClient) { }

  getUser(): Observable<ApiResponse<Users[]>> {
    return this.http.get(`${environment.apiUrlUserBase}`).pipe(
      map((data) => ({ data } as ApiResponse<Users[]>)),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
      let errorMensage = 'Ocurrio un error';
      if (error.error instanceof ErrorEvent) {
        //Error del lado del cliente
        errorMensage = `Error`
      } else {
        errorMensage = `Código de error`
      }
      return throwError(() => new Error(errorMensage))
    }

}

