import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tache } from 'src/app/models';

@Component({
  selector: 'app-modifier-tache',
  templateUrl: './modifier-tache.component.html',
  styleUrls: ['./modifier-tache.component.css']
})
export class ModifierTacheComponent implements OnInit {

  public tacheForm: FormGroup;
  public submited: boolean = false;
  @Input() tache: Tache ;

  @Output() onUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.tacheForm = new FormGroup({
      id: new FormControl(this.tache?.id),
      titre: new FormControl(this.tache?.titre, [Validators.required]),
      description: new FormControl(this.tache?.description),
      priorite: new FormControl(this.tache?.priorite, [Validators.required]),
      date: new FormControl(this.tache?.date, [Validators.required]),
      rappelles: new FormControl(this.tache?.rappelles)
    });
  }

  modifierTache() {
    if (!this.tacheForm.valid) {
      this.submited = true;
      //alert('Veuillez remplir les champs');
      return;
    }
    this.onUpdate.emit(this.tacheForm.value);
    this.submited = false;
  }


}
