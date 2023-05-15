import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todos = [
    {
      id: 1,
      name: 'Sample'
    },
    {
      id: 2,
      name: 'Test'
    },
  ]
}
