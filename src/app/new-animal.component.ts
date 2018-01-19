import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
    <h3>Add New Animal</h3>
    <div>
      <label>Species</label>
      <input #newSpecies>
      <label>Name</label>
      <input #newName>
      <label>Age</label>
      <input #newAge type="number">
      <label>Diet</label>
      <input #newDiet>
      <label>Location</label>
      <input #newLocation>
      <label>Caretakers</label>
      <input #newCaretakers type="number">
      <label>Sex</label>
      <input #newSex>
      <label>Likes</label>
      <input #newLikes>
      <label>Dislikes</label>
      <input #newDislikes>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Add </button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
