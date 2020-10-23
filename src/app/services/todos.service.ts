import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient:HttpClient) { }

  getTodos(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
