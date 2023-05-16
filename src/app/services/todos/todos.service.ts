import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Todos } from '../api/api.types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  private todosSubject: Subject<void> = new Subject();
  private todosToEditSubject: Subject<Todos> = new Subject();

  // Metoda emitująca wartości/zdarzenia/eventy w strumieniu
  public emitInfoAboutChanges(): void {
    this.todosSubject.next()
  }

  // Metoda dostarczajaca mechanizmu do podłaczenia się do nasłuchiwania strumienia danych
  public listenAboutChanges(): Observable<void> {
    return this.todosSubject.asObservable()
  }

  // Metoda wysyłające todos'a do edycji
  public emitTodosToEdit(todosToEdit: Todos): void {
    this.todosToEditSubject.next(todosToEdit)
  }

  // Metoda dostarczajaca todos'a do edycji
  public listenAboutTodosToEdit(): Observable<Todos> {
    return this.todosToEditSubject.asObservable()
  }
}
