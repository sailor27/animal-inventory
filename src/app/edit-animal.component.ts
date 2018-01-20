import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Editing: {{childSelectedAnimal.species}}</h3>
    <label>Species</label>
    <input [(ngModel)]="childSelectedAnimal.species">
    <label>Name</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    <label>Age</label>
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <label>Diet</label>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <label>Caretakers</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    <label>Sex</label>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <label>Likes</label>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <label>Dislikes</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }


}
