import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  private todosSubject: Subject<void> = new Subject();

  // Metoda emitująca wartości/zdarzenia/eventy w strumieniu
  public emitInfoAboutChanges(): void {
    this.todosSubject.next()
  }

  // Metoda dostarczajaca mechanizmu do podłaczenia się do nasłuchiwania strumienia danych
  public listenAboutChanges(): Observable<void> {
    return this.todosSubject.asObservable()
  }
}
