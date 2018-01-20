import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <div class="animal-options">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected"> All Animals </option>
      <option value="youngAnimals"> Young Animals </option>
      <option value="matureAnimals"> Mature Animals </option>
    </select>
  </div>
  <div class="animal-card">
    <ul *ngFor= "let currentAnimal of childAnimalList | age:filterByAge">
      <h3>{{currentAnimal.species}}</h3>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>

      <button (click)="editAnimalButtonHasBeenClicked(currentAnimal)"> Edit </button>
    </ul>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";
  
  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
}
