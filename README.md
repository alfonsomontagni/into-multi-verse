# 11 March 2023

ng new multi --minimal --directory=multiverse --interactive=false
 cd .\multiverse\
 git flow init
 create new repository https://github.com/alfonsomontagni/into-multi-verse.git
 
 git remote add origin https://github.com/alfonsomontagni/into-multi-verse.git
 git add .
 git commit -m "Primo commit"

 git checkout develop
 git flow feature start BS0001_US001_ED (git flow feature finish BS0001_US001_ED)
 git pull origin develop
 git add . 
 git commit -m "begin walking skeleton" or by VSCode after staged
 git push
 git push --set-upstream origin feature/BS0001_US001_ED

 creazione del prgetto h01
ng g application h01  --style=scss --routing=true
ng serve --project=h01  --o

ng build --project=h01 --aot 
ng serve --project=h01 --open --watch
//@echo off
danger  ng_module
 cd projects 
 tree /A /F > tree.txt 
 cd ..
 npm install json-server --save-dev
 npm add @angular/cdk
 ng add @angular/material
 npm install bootstrap@4
 npm install karma --save-dev
 npm install karma-jasmine  --save-dev
 npm install jasmine-core  --save-dev
 npm install karma-chrome-launcher --save-dev
npm install karma-jasmine-html-reporter --save-dev
npm install karma-coverage --save-dev
npm install @types/jasmine --save-dev
npm install karma-coverage-istanbul-reporter --save-dev
npm install karma-spec-reporter --save-dev
ng test --project=h01  --watch=false  --code-coverage
#

ng g s auth/auth --project=h01 --dry-run
ng g s auth/auth --project=h01
ng g s core/config/config --project=h01 --dry-run
ng g s core/config/config --project=h01 
ng g c core/components/nav-bar --project=h01 --dry-run
ng g c core/components/nav-bar --project=h01 
mkdir projects/h01/src/app/mock  "exclude": ["src/app/mock/**"],
ng g m shared --project=h01 --dry-run
ng g m shared --project=h01 

ng serve --project=h01 --o

# Multi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
