import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../model/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService{

  constructor(private http: HttpClient) { }
  getDivisionList(keyword): Observable<Division[]>{
    return this.http.get<Division[]>('http://localhost:8080/api/division/list?keyword='+keyword);
  }
  
}
