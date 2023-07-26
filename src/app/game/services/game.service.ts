import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8080/api/v1/'
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) {
  }

  getGamePaged(params:any):Observable<any>{
    return this.http.get<any>(baseUrl+'games/paginated', {params:params})
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createGame(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateGame(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteGame(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
