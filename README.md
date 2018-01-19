# AnimalInventory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Commit Plan

| Time     | Expected Commit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Notes |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| 10:00am  | Set up development environment using npm, bower, angular/cli and serve. Add plan to README.                                                                                                                                                                                                                                                                                                                                                                                                                               |       |
| 10:15 am | Create array of starter animals and animal class in the root module. List animals using HTML and *ngFor directive. Test animals in view when page is loaded. https://www.learnhowtoprogram.com/javascript/angular/views-introduction-to-directives                                                                                                                                                                                                                                                                        |       |
| 10:45am  | Add edit animal function to root component class with an alert "you are editing." Attach edit animal button on animal entries and bind edit function to click event, and test. https://www.learnhowtoprogram.com/javascript/angular/event-bindings                                                                                                                                                                                                                                                                        |       |
| 11:30am  | Move animal-list to its own component, and animal class to its own module. Link class to root and new component, and add html tag for animal-list component in root. Import Input to components. Add an @Input to animal-list, and attach to receive list data from root component. Test to see if animal list is on page when it loads. Add an @Output and attach click event to edit button to change animal's selected property from null to selected.                                                                 |       |
| 12:00pm  | Import FormsModule to root module. Create edit-animal component. Add @Import and get data from model indicating animal is selected when edit button is clicked. Use ngIf to display selected animal's edit form in view.  Use [(ngModel)] to two-way bind input on Edit form to animal. Add doneEditing method. Add @Output to send click and trigger doneEditing method, which tells the model to mark animal.Selected as null. https://www.learnhowtoprogram.com/javascript/angular/editing-models                      |       |
| 1:30pm   | Create new-animal component and add html to root component view. Import needed modules to component and add component to root module. Set up new-animal form in new-animal component, using template reference variables.                                                                                                                                                                                                                                                                                                 |       |
| 2:30pm   | Add button to form on new-animal component, and attach submitForm function with input variables as arguments. Add @Output to send data up, which is a new Event Emitter. Define submit form function with animal object parameters, creating newAnimaltoAdd variable, use .emit() to send new animal up to model. Attach addAnimal($event) to Add animal button on root component. Test adding new animal objects. https://www.learnhowtoprogram.com/javascript/angular/template-reference-variables-and-creating-objects |       |
| 3:30pm   | Add new component age.pipe and import pipe interface to component. Link pipe to root module. Create for loop to filter only animals younger than 2. Implement pipe by adding to animal-list component.                                                                                                                                                                                                                                                                                                                    |       |
| 4:00pm   | Add select menu with drop down options for young and mature animals to animal-list component. Set filterByAge property on animal-list component. Add change event binding to select in template.  "onChange(event.target.value)". Create onChange method in animal-list component, with optionfromMenu as an argument, to set this as filterByAge property. https://www.learnhowtoprogram.com/javascript/angular/filtering-data-with-pipes                                                                                |       |
| 4:30pm   | Add if else statements to age.pipe transform method. Add desiredAge as a second parameter. Filter using input[i].age.  Update pipe on animal-list component (age:filterbyAge).                                                                                                                                                                                                                                                                                                                                            |       |

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
