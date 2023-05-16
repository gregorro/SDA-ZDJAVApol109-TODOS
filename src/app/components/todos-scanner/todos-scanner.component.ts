import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { TodosService } from 'src/app/services/todos/todos.service';
import { v4 } from 'uuid'

export const TODOS_CHANGED_EVENT_NAME = 'todos-changed'

@Component({
  selector: 'app-todos-scanner',
  templateUrl: './todos-scanner.component.html',
  styleUrls: ['./todos-scanner.component.css']
})
export class TodosScannerComponent {
  todoName: string = ''
  todoDescription: string = ''

  constructor(private apiService: ApiService,
    private todosService: TodosService) { }

  saveTodos() {
    this.apiService.addTodos({
      id: v4(),
      name: this.todoName,
      description: this.todoDescription,
    }).subscribe(() => {
      this.todoName = '';
      this.todoDescription = '';

      // Tworzenie eventu
      // const event = new CustomEvent(TODOS_CHANGED_EVENT_NAME)

      // Wysłanie eventu
      // window.dispatchEvent(event)

      // Emitowanie zdarzenia za pomoca serwisu
      this.todosService.emitInfoAboutChanges()
    })
  }

}
