import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  private cache = new Map<string, HttpResponse<any>>();


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Verifica se la richiesta è in cache
    const cachedResponse = this.cache.get(request.url);
    if (cachedResponse) {
      // Restituisce la risposta dalla cache
      console.log('La risposta è stata recuperata dalla cache.');
      return of(cachedResponse);
    }
    // Esegue la richiesta e archivia la risposta nella cache
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('La risposta è stata archiviata nella cache.');
          this.cache.set(request.url, event);
        }
      }),
      catchError((error) => {
        console.error('Errore durante la cache della risposta:', error);
        // Restituzione di un Observable alternativo
        return of(error);
      })
    );
  }
}
