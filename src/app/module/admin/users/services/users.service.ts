import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  apiUrl="http://localhost:8081/api/v3/kingsoftuser";
  getall():Observable<UsersResponse[]>{
return this.http.get<UsersResponse[]>(this.apiUrl);
  }
  constructor(private http:HttpClient) { }
}
