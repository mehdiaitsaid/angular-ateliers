import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AjouterTacheComponent } from './components/ajouter-tache/ajouter-tache.component';
import { ModifierTacheComponent } from './components/modifier-tache/modifier-tache.component';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';

@NgModule({
  declarations: [
    AppComponent,
    DateAgoPipe,
    AjouterTacheComponent,
    ModifierTacheComponent,
    ListeTachesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
