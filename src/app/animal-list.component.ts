import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="animal-card">
    <h2>Animals</h2>
    <h2>Test Animal: {{childAnimalList[1].name}}</h2>
    <ul *ngFor= "let currentAnimal of childAnimalList">
      <h3>{{currentAnimal.species}}</h3>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
      <button (click)="editAnimal()"> Edit </button>
    </ul>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];



}
