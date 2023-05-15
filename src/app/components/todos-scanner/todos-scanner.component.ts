import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { v4 } from 'uuid'

@Component({
  selector: 'app-todos-scanner',
  templateUrl: './todos-scanner.component.html',
  styleUrls: ['./todos-scanner.component.css']
})
export class TodosScannerComponent {
  todoName: string = ''
  todoDescription: string = ''

  constructor(private apiService: ApiService) { }

  saveTodos() {
    this.apiService.addTodos({
      id: v4(),
      name: this.todoName,
      description: this.todoDescription,
    }).subscribe(() => {
      this.todoName = '';
    })
  }
}
