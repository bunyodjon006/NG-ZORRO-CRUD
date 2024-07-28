import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeachersResponse } from '../models/teachers.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  apiUrl="http://localhost:8081/api/v2/teacher";

  
  constructor(private http:HttpClient) { }

  getAll(): Observable<TeachersResponse[]> {
  return this.http.get<TeachersResponse[]>(this.apiUrl);
}


}
