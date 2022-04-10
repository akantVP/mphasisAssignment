import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { catchError, map } from 'rxjs/operators';

const usersData = {
  "dev": [{id:'1',role:'Developer',name:'a'},{id:'2',role:'Manager',name:'b'}],
  "qa": [{id:'3',role:'HR',name:'c'},{id:'4',role:'Delivery Head',name:'d'}],
  "other": [{id:'5',role:'IT Support',name:'e'},{id:'6',role:'System Engineer',name:'f'}]
 }

 @Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('users/dev')) {
      return of(new HttpResponse({ status: 200, body: usersData.dev }));
    } else if(req.url.includes('users/qa')) {
      return of(new HttpResponse({ status: 200, body: usersData.qa }));
    } else {
      return of(new HttpResponse({ status: 200, body: usersData.other }));
    }
  }
}
