import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos, TodosList } from './api.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Wstrzykniecie mechanizmu dostepu http czyli  http: HttpClient
  constructor(private http: HttpClient) { }

  // Zdefiniowanie ścieżki głownej do naszego BE
  private baseUrl: string = 'http://localhost:3000'

  // Metoda pobierająca dane o todos'ach
  getTodos(): Observable<TodosList>  {
    return this.http.get<TodosList>(`${this.baseUrl}/todos`)
  }

  // Metoda wstawiająca dane
  addTodos(todos: Todos){
    return this.http.post(`${this.baseUrl}/todos`, todos)
  }
}
