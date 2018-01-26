//root component 🌳
import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { routing } from './app.routing';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>{{title}}</h1>
      <h5>View current animals, edit animal info, and add new animals</h5>
    </div>

    <div class="animals">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    </div><!-->animals<-->

  

    <div class="forms row">
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <edit-animal class="col-lg-5" [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>

  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal Inventory';
  currentAnimal: string = '';

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool Shade", "Loud Noises"),
    new Animal("Ocelot", "Prince", 1, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black-Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  selectedAnimal = null;



  newColor(animal){
    return "new col-lg-5";
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }


}
