import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:string ='http://omdbapi.com/?apikey=525ee2ca&s='
  constructor(private http: HttpClient) { }

  findMoviesByTitle(movieName:String):Observable<any>{
    return this.http.get(this.baseUrl+`${movieName}`)
  }
}
