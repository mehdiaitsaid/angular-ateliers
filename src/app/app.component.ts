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
  public tache: Tache;
  public isOnUpdate = false;

  ngOnInit() {

  }



  selectedTache(event: Tache) {
    
    this.tache = event;
    this.isOnUpdate = true;
  }
  onUpdate(event: Tache) {
    this.isOnUpdate = false;
    
  }




}
