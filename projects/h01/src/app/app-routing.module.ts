import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { NoAuthComponent } from './auth/no-auth/no-auth.component';
import { RolesGuard } from './auth/roles.guard';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [RolesGuard], data: { roles: ['admin', 'user'] } },
  { path: 'no-auth', component: NoAuthComponent },
  { path: 'login', component: AuthLoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
