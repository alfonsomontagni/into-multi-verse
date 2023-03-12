
# init

## 11 March 2023

bash
rm -rf node_modules
ng new multi --minimal --directory=multiverse --interactive=false
 cd .\multiverse\
 git flow init
 create new repository <https://github.com/alfonsomontagni/into-multi-verse.git>

 git remote add origin <https://github.com/alfonsomontagni/into-multi-verse.git>
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

## 12 Marzo 2023

mkdir projects/h01/server
mkdir projects/h01/src/app/environments
echo >  projects/h01/server/db.json
projects/h01/src/app/environments/environment.ts
projects/h01/src/app/environments/environment.develop.ts
projects/h01/src/app/environments/environment.prod.ts
projects/h01/src/assets/config.json
add path into .gitignore
    # json-server
    /projects/h01/server
appunti.txt

ng test --no-watch --project=h01 --include=*/**/app.component.spec.ts
ng g c core/components/landing-page --project=h01 --dry-run
ng g c core/components/landing-page --project=h01
   in app-routing.module const routes: Routes = [
    { path: '', component: LandingPageComponent }
    ];
import { RouterTestingModule } from '@angular/router/testing';
inserire  stub sul routing con RouterTestingModule

npm i @fortawesome/fontawesome-free
npm uninstall  @angular/material
npm install  @angular/material
cambiare le icone nella nav bar

npm i lodash
npm i moment
npm i file-saver
npm i @handsontable/angular
npm i handsontable
npm i concurrently
npm i @types/lodash
npm i keycloak-angular
npm i keycloak-js
npm i uuid
npm i @types/uuid
npm i moment-timezone
npm i @egjs/hammerjs
npm i propagating-hammerjs
npm i angular2-multiselect-dropdown import css
npm i xlsx
