import { Component } from '@angular/core';
import { Tache } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public taches: Tache[] = [];
  public tache: Tache = {
    id: 0,
    titre: '',
    description: '',
    priorite: 3,
    date: '',
    rappelles: false,
  };

  ajouterTache() {
    if (this.tache.titre === '') {
      alert('Veuillez remplir le champ');
      return;
    }
    this.tache.id = Math.floor(Math.random() * 5000);
    this.taches.push(this.tache);
    this.tache = {
      id: 0,
      titre: '',
      description: '',
      priorite: 3,
      date: '',
      rappelles: false,
    };
  }



}
