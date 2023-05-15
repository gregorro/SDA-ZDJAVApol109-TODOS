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

  constructor(private apiService: ApiService) { }

  saveTodos() {
    console.log('saveTodos')
    this.apiService.addTodos({
      name: this.todoName,
      id: v4()
    }).subscribe()
  }
}
