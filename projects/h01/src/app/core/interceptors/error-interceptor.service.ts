import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Errore client-side
          errorMessage = `Errore: ${error.error.message}`;
        } else {
          // Errore server-side
          errorMessage = `Errore: ${error.status}\nMessaggio: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>new Error(errorMessage));
      })
    );
  }
}
