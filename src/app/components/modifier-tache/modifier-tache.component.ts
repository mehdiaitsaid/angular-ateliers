import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tache } from 'src/app/models';
import { TacheService } from 'src/app/services/tache.service';

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


  constructor(private tacheservices: TacheService) { }


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

    this.tacheservices.modifierTache(this.tacheForm.value);
    this.onUpdate.emit();

    this.submited = false;
  }


}
