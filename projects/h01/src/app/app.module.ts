import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule, 
    SharedModule,
    AngularMaterialModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (configService: ConfigService) => () => configService.loadConfig(),
    deps: [ConfigService],
    multi: true,
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
