import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tache } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private subject = new Subject();
  private taches: Tache[] = [];

  constructor() { }


  supprimerTache(id: number) {
    this.taches = this.taches.filter(tache => tache.id !== id);
    this.subject.next({ taches: this.taches });

  }
  modifierTache(tache: Tache) {
    this.taches = this.taches.map(item => {
      if (item.id !== tache.id) return item;
      else return tache;
    });
    this.subject.next({ taches: this.taches });
  }
  ajouterTache(tache: Tache) {
    tache.id = Math.floor(Math.random() * 5000);

    this.taches.push(tache);
    this.subject.next({ taches: this.taches });
  }
  getTaches(): Observable<any> {
    return this.subject.asObservable();
  }
}
