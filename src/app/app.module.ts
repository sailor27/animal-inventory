import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component'


@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, AnimalListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
