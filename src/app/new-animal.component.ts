import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
	styleUrls: ['./new-animal.component.scss']
})

export class NewAnimalComponent {
	@Input() childShowingAddForm;
  @Output() newAnimalSender = new EventEmitter();


  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
