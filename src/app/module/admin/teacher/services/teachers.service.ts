import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeachersRequest, TeachersResponse } from '../models/teachers.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
 public  apiUrl="http://localhost:8081/api/v2/teacher";

  
  constructor(private http:HttpClient) { }

  getAll(): Observable<TeachersResponse[]> {
  return this.http.get<TeachersResponse[]>(this.apiUrl);
}
 add(model:TeachersRequest){
  return this.http.post<TeachersResponse>(this.apiUrl,model)
 }

 edit(id:number,model:TeachersRequest):Observable<TeachersResponse>{
  return this.http.put<TeachersResponse>(`${this.apiUrl}/${id}`,model)
 }
getById(id:number){
  return this.http.get<TeachersResponse>(`${this.apiUrl}/${id}`)
}
}
