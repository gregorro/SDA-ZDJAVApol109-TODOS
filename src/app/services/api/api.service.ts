import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Wstrzykniecie mechanizmu dostepu http czyli  http: HttpClient
  constructor(private http: HttpClient) { }

  // Zdefiniowanie ścieżki głownej do naszego BE
  private baseUrl: string = 'http://localhost:3000'

  // Metoda pobierająca dane o todos'ach
  getTodos(): Observable<Object>  {
    return this.http.get(`${this.baseUrl}/todos`)
  }
}
