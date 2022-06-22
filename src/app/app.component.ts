import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tache } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'my-app';
  public taches: Tache[] = [];
  public tache: Tache;
  public isOnUpdate = false;

  ngOnInit() {

  }

  onAdd(event: Tache) {

    this.taches.push(event);
    
  }

  selectedTache(event: Tache) {
    console.log(event);
    
    this.tache = event;
    this.isOnUpdate = true;
  }
  onUpdate(event: Tache) {

    this.taches = this.taches.map(tache => {
      if(tache.id !== event.id) return tache;
      else return event;
    });
    this.isOnUpdate = false;
    
  }




}
