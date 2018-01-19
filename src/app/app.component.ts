//root component 🌳
import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Animal ~ Inventory</h1>
      <h5>Today is {{month}}/{{day}}/{{year}}</h5>
      <h6>Do you know where your animals are?</h6>
      <h5>View current animals, edit animal info, and add new animals</h5>
    </div>
    <div class="animals">
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    </div><!-->animals<-->
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentAnimal: string = '';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool Shade", "Loud Noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black-Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Nouises")
  ];

  selectedAnimal = null;


  editAnimal(clickedAnimal){
    alert("you want to edit, huh? good news: this feature is coming soon");
    this.selectedAnimal = clickedAnimal;
  }


}
