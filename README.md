# Animal Inventory
Sailor Winkelman
01/19/18

This application displays data about animals in a zoo. It was built using Javascript, Typescript and Angular.

## User Story:
* Users can view a list of animals in the zoo, and their information
* Users can add new animals to the list
* Users can edit animal information
* Users can filer list to show young, mature, or all animals

## Future Functionality:

* Users can distinguish which animals they added to the list from others
* User interface is styled to be intuitive, pleasing, and responsive


## Technologies Used

The following tools were used to create this project:


[node.js](https://nodejs.org/en/docs/) : package management and installation

[bower](https://bower.io/docs/api/) : front end package management and installation

[Angular CLI](https://github.com/angular/angular-cli)  : initial project file generation and configuration. compile typescript. serve project locally.

[TypeScript](http://www.typescriptlang.org/) : language files for angular are written in before they are compiled for the browser.

[karma](https://karma-runner.github.io/2.0/index.html) : unit testing

[bootstrap](https://momentjs.com/) : basic styling


## Setup

```
 npm install -g @angular/cli 
```
* Clone repository
* Run $npm install in terminal
* Run $bower install in terminal
* Run $npm init in terminal
* Run $bower init in terminal

```
Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```

## Project Commit Plan
| Time     | Expected Commit                                                                                                                                                                                                                                                                                                                                                                                                 | Notes                                                                                                                                              |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 10:00am  | Set up development environment using npm, bower, angular/cli and serve. Add plan to README.                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                    |
| 10:15 am | Create array of starter animals and animal class in the root module. List animals using HTML and *ngFor directive. Test animals in view when page is loaded.                                                                                                                                                            |                                                                                                                                                    |
| 10:45am  | Add edit animal function to root component class with an alert "you are editing." Attach edit animal button on animal entries and bind edit function to click event, and test.                                                                                                                                                               |                                                                                                                                                    |
| 11:30am  | Move animal-list to its own component, and animal class to its own module. Link class to root and new component, and add html tag for animal-list component in root. Import Input to components. Add an @Input to animal-list, and attach to receive list data from root component. Test to see if animal list is on page when it loads. | Re-did this step multiple times. Issue was "let currentAnimal of childAnimalList" said of masterAnimal list instead.                               |
| 2:00pm   | Add an @Output and attach click event to edit button to change animal's selected property from null to selected.                                                                                                                                                                                                                                                                                                | Re-did this step multiple times. Issue was no argument (currentAnimal) passed in to editAnimalButtonHasBeenClicked(currentAnimal) on button click. |
| 2:15pm   | Create edit-animal component. Add @Import and get data from model indicating animal is selected when edit button is clicked. Use ngIf to display selected animal's edit form in view.,Use [(ngModel)] to two-way bind input on Edit form to animal. Add finishedEditing method. Add @Output to send click and trigger doneEditing method, which tells the model to mark animal selected as null.                |                                                                                                                                                    |
| 2:45pm   | Create new-animal component. Set up new-animal form in new-animal component. Send output from form to root component, add to Animals array, display using animal list.                                                                                                                                                                                                                                          |                                                                                                                                                    |
| 3:00pm   | Add new component age.pipe and import pipe interface to component. Link pipe to root module. Create for loop to filter only animals younger than 2.                                                                                                                                                                                                                                                             |                                                                                                                                                    |
| 3:10pm   | Implement pipe by adding to animal-list component.                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                    |
| 3:15pm   | Add select menu with drop down options for young and mature animals to animal-list component. Set filterByAge property on animal-list component to default. Create onChange method accepting selected option as argument. Mark allAnimals selected in drop down menu.                                                                                                                                           |                                                                                                                                                    |
| 3:30pm   | Add if else statements to age.pipe transform method. Add desiredAge as a second parameter. Filter using input[i].age.                                                                                                                                                                                                                                                                                           |                                                                                                                                                    |
| 3:45pm   | Update pipe to accept selected filtering parameter on animal-list component (age:filterbyAge).                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                    |
## Author

 **Sailor Winkelman**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
