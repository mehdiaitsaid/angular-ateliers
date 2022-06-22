import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tache } from 'src/app/models';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent implements OnInit {

  @Input() taches: Tache[] = [];
  @Output() selectedTache = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  } 
  
  supprimer(id: number) {
    this.taches = this.taches.filter(tache => tache.id !== id);
  }  
  modifier(tache: Tache) {
    this.selectedTache.emit(tache);
  }

}
