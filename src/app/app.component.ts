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
  public tacheForm: FormGroup;
  public submited: boolean = false;

  ngOnInit() {
    this.tacheForm = new FormGroup({
      id: new FormControl(null),
      titre: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      priorite: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      rappelles: new FormControl(false)
    });
  }

  ajouterTache() {
    if (!this.tacheForm.valid) {
      this.submited = true;
      //alert('Veuillez remplir les champs');
      return;
    }
    this.tacheForm.value.id = Math.floor(Math.random() * 5000);
    this.taches.push(this.tacheForm.value);
    this.submited = false;
  }



}
