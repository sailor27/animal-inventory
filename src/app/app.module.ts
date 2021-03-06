import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgePipe } from './age.pipe';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule, FormsModule, routing
  ],
  declarations: [
    AppComponent, AnimalListComponent, EditAnimalComponent, NewAnimalComponent, AgePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
