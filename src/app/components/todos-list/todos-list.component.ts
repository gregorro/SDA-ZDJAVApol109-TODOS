import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { TodosList } from 'src/app/services/api/api.types';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  // Zdefiniowanie pojemnika (zmiennej) na dane
  todos: TodosList = []
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTodos().subscribe(data => {
      this.todos = data;
    })
  }
}
