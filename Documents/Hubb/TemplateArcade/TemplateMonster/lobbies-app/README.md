# MetaGen v1.8.2

![wizard](https://media.giphy.com/media/Tw0rSdQs4fbJC/giphy.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.


## Description 

This angular application was created to make a scalable codebase that populates through dynamic data fed through a `event-config.JSON` file. This creates easier implimentation and maintenance for the developers of custom web page for individual clients. 

## SetUp/Build

 * Run the build with the terminal command `ng build --prod`
 * Copy the `dist` and zip it
 * Give it to your scrum master for hosting in a CDN
 * Once the application is hosted open the Hubb event and go to the `Admin` tab in application then click on the `Event` tab
 * Click on `Message Managment`
 * `Edit` the title associated with the page you want to target. 
 * once you have the `Message` open click on the `Tools` and open the wizzy wig editor ie. `<> Source Code` (this will allow the application to work within an Iframe)
 * once open in seart the follow code in to the edit box with: 
 
  `` <p><iframe title="app-(tab name)" src="https://dynamiceventscorp.blob.core.windows.net/1angular/index.html?type=app-(tab name)" width="1366px" height="768px"></iframe></p> ``

 * Remember to fill in the correct `tab name` when you input the source code.
 * click `Save` & go back to `Schedule Builder` to check your work

## Errors/Trouble Shooting 
  * The data populating the application is from a `event-config.js` file but if you're seeing errors show up in the code please be sure to check if you file is uploaded to the event resources 

  * If their is issues with tabs not not showing the correct view check the scope in the `index.html` alternativity check the time refresh issues when page is loaded too many times. Try a hard refresh of the browser

  * If issues are still proceeding with the application not reading the correct informaton form the `event-config.js` file. Double check the spelling of the [script.src](custom-lobbies-NEW\lobbies-app\src\app\services\event-info.service.ts) id the `services` directory under the `event-info.service.ts` matches what you have saved in the Hubb resources.
  
## URL Requests
When running `ng serve` but you must include the scope of which `event-config.js` you're using. 

| Module Name  | URL |
|:------------|----------------------------:|
| Lobby | http://localhost:4200/#/lobby/{scope} |
| Community | http://localhost:4200/#/community/{scope} |
| Exhibition | http://localhost:4200/#/exhibition/{scope}  |
| Sessions | http://localhost:4200/#/session/{scope} 
|

## Branch Managment & Workflow
  * When statting a new ticket create a branch off of master with a breif discription of what your working on, for example: `video-component-timing`.
    * creating a new branch is simple as runnign the terminal command `git checkout -b (your branch name)`
  * Make your commits to your specified branch until you complete the ticket
    * to switch between branches simple imput the terminal command `git checkout (your branch name)`
  * after completing your ticket, submit it to your team to have a code review. 
  * Once the code review has passed then merge the branch with the `master` 
    * Once completing the merge, delete the branch through the terminal command `git branch -d (your branch name)`

_For more helpful information on git branching go to the [git](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) informational page._
## Diagram 

![app diagram]()

## Support

  Ian Gregg - igregg@hubb.me

  Kyle Hubbard - khubbard@hubb.me

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
