
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

ng g interceptor auth/auth --project=h01 --dry-run
rename auth.interceptor.service
 ng g service core/interceptors/error-interceptor --project=h01 --dry-run
mkdir core interceptors
ng g service core/interceptors/cache-interceptor --project=h01 --dry-run
ng g c auth/no-auth --project=h01 --dry-run
ng generate guard auth/roles --skipTests=true --project=h01 --dry-run
ng generate guard auth/roles --skip-tests=true --project=h01 --dry-run
ng g c auth/auth-login --project=h01  

ng g service mock/mock-backend-interceptor --project=h01 --skip-tests=true --dry-run

npm install eslint --save-dev //eslint@8.36.0
npx eslint --init You can also run this command directly using 'npm init @eslint/config'.

 npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
npx: installed 41 in 7.472s
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest

npm install @ngrx/store @ngrx/effects @ngrx/store-devtools --save
npm i @ngrx/router-store
npm i json-server-auth
npm i @types/node --save-dev

//bootstrap da togliere ma per esempio la tengo
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
@tailwind base;
@tailwind components;
@tailwind utilities;

css 
@tailwind base;
@tailwind components;
@tailwind utilities;

scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';