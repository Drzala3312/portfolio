---------------------Flow and relations of files----------------------------------
src
	+app
	+----app.component.html //main file
		+---- sidenav
			+----sidenav.component.html //side navigation
			+----sidenav.component.ts  //logical
			+----sidenav.component.scss //css for sidenav component
		+----portfolio
			+----components
				+----about
					+----about.component.html //about component
					+----about.component.ts //logical part
					+----about.component.scss //css for about
				+----experience
					+----experience.component.html //experience component
					+----experience.component.ts //logical part
					+----experience.component.scss //css for experience
				+----education
					+----education.component.html //education component
					+----education.component.ts //logical part
					+----education.component.scss //css for education
				+----skills
					+----skills.component.html //skills component
					+----skills.component.ts //logical part
					+----skills.component.scss //css for skills
				+----projects
					+----projects.component.html //projects component
					+----projects.component.ts //logical part
					+----projects.component.scss //css for projects
				+----awards
					+----awards.component.html //awards component
					+----awards.component.ts //logical part
					+----awards.component.scss //css for awards
				+----interest
					+----interest.component.html //interest component
					+----interest.component.ts //logical part
					+----interest.component.scss //css for interest
	+---app.component.ts //logical part
	+----app-routing.module.ts //register route path
	+----app.module.ts
style.scss //contain css of whole web
assets
	+images
		+----profile.png //profile pic
		
---------------------Dependencies and steps----------------------------------		
**********npm version 6.14.6***********
NodeJs version 12.18.3
Angular version 9.1.4
bootstap - 4
font-awesome - 4.7.0

*********Steps to run project*********
-go to project folder
-open the terminal/command-prompt
-write the following commands
	npm i
	ng serve --open
		
		
---------------------Technology Used----------------------------------
# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
		
