import { Component, Input } from '@angular/core';
import { Todos } from 'src/app/services/api/api.types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todo!: Todos
}
