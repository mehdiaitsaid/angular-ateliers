import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public taches: String[] = [];
  public tache: String = '';

  ajouterTache(){
    if (this.tache === ''){
       alert('Veuillez remplir le champ');
       return;
      }
    
    this.taches.push(this.tache)
    this.tache = ''
  }



}
