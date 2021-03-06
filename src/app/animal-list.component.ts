import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];

  @Output() clickSender = new EventEmitter();
	@Output() clickSender2 = new EventEmitter();

	filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
    console.log(this.filterByAge);
  }

  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }

	addAnimalButtonHasBeenClicked(yes){
		this.clickSender2.emit("yes");
		console.log("sending add click");
	}

}
