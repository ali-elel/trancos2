// import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GridsterModule } from 'angular-gridster2';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './presentations/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './presentations/dashboard/dashboard.component';
import { GraphBulletComponent } from './components/graph-bullet/graph-bullet.component';
import { ThousandsPipe } from './pipes/thousands.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OperationMiniComponent } from './features/operation-mini/operation-mini.component';
import { OperationDetailsComponent } from './features/operation-details/operation-details.component';
import { GraphProcessComponent } from './features/graph-process/graph-process.component';
import { GraphWarrantyComponent } from './features/graph-warranty/graph-warranty.component';
import { GraphOperationsComponent } from './features/graph-operations/graph-operations.component';
import { TableOperationsComponent } from './features/table-operations/table-operations.component';
import { EmittedComponent } from './presentations/emitted/emitted.component';
import { ReceivedComponent } from './presentations/received/received.component';
import { SidenavComponent } from './features/sidenav/sidenav.component';
import { MultiBulletComponent } from './features/multi-bullet/multi-bullet.component';
import { EmitReceiveComponent } from './features/emit-receive/emit-receive.component';
import { MultiGraphOperationsComponent } from './features/multi-graph-operations/multi-graph-operations.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphBulletComponent,
    ThousandsPipe,
    OperationMiniComponent,
    OperationDetailsComponent,
    GraphProcessComponent,
    GraphWarrantyComponent,
    GraphOperationsComponent,
    TableOperationsComponent,
    EmittedComponent,
    ReceivedComponent,
    SidenavComponent,
    MultiBulletComponent,
    EmitReceiveComponent,
    MultiGraphOperationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    GridsterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
