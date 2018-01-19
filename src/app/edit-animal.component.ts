import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Editing: {{childSelectedAnimal.species}}</h3>
    <input [(ngModel)]="childSelectedAnimal.species">
    <input [(ngModel)]="childSelectedAnimal.name">
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <input [(ngModel)]="childSelectedAnimal.diet">
    <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    <input [(ngModel)]="childSelectedAnimal.sex">
    <input [(ngModel)]="childSelectedAnimal.likes">
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
