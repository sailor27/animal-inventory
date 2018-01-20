import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
    <h3>Add New Animal</h3>
    <div>
      <div class="form-group">
        <label>Species</label>
        <input #newSpecies>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input #newAge type="number">
      </div>
      <div class="form-group">
        <label>Diet</label>
        <input #newDiet>
      </div>
      <div class="form-group">
        <label>Location</label>
        <input #newLocation>
      </div>
      <div class="form-group">
        <label>Caretakers</label>
        <input #newCaretakers type="number">
      </div>
      <div class="form-group">
        <label>Sex</label>
        <input #newSex>
      </div>
      <div class="form-group">
        <label>Likes</label>
        <input #newLikes>
      </div>
      <div class="form-group">
        <label>Dislikes</label>
        <input #newDislikes>
      </div>

      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';"> Add </button>
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
