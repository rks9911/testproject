import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AplistService {

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
