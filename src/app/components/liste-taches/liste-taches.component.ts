import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tache } from 'src/app/models';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent implements OnInit {

  taches: Tache[] = [];
  @Output() selectedTache = new EventEmitter();
  subscription: Subscription;



  constructor(private tacheservices: TacheService) { }

  ngOnInit(): void {
    this.subscription = this.tacheservices.getTaches().subscribe(data => {
      this.taches = data.taches;
    });
  } 
  
  supprimer(id: number) {
    this.tacheservices.supprimerTache(id);
  }  
  modifier(tache: Tache) {
    this.selectedTache.emit(tache);
  }

}
