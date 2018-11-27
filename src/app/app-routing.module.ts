import { EmittedComponent } from './presentations/emitted/emitted.component';
import { ReceivedComponent } from './presentations/received/received.component';
import { DashboardComponent } from './presentations/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './presentations/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'emitted', component: EmittedComponent, canActivate: [AuthGuard] },
  { path: 'received', component: ReceivedComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
