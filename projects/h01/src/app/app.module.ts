import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './material/material.module';
import { ConfigService } from './core/config/config.service';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { AuthInterceptorService } from './auth/auth-interceptors/auth.interceptor.service';
import { CacheInterceptorService } from './core/interceptors/cache-interceptor.service';
import { ErrorInterceptorService } from './core/interceptors/error-interceptor.service';
import { NoAuthComponent } from './auth/no-auth/no-auth.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { mockBackendInterceptor } from './mock/mock-backend-interceptor.service';

// Handsontable register modules
registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    NoAuthComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule, 
    SharedModule,
    AngularMaterialModule,
    HotTableModule.forRoot(),

  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (configService: ConfigService) => () => configService.loadConfig(),
    deps: [ConfigService],
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true },
    mockBackendInterceptor,
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
