import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  URL = 'http://localhost:4200/users/'

  constructor(private http: HttpClient) { }

  getData(_val: any) {
    return this.http.get<any>(this.URL+_val);
  }
}
