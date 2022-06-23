import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.css']
})
export class AjouterTacheComponent implements OnInit {
  public tacheForm: FormGroup;
  public submited: boolean = false;

  constructor(private tacheservices: TacheService) { }


  ngOnInit(): void {
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
    this.tacheservices.ajouterTache(this.tacheForm.value)
    this.submited = false;
  }


}
