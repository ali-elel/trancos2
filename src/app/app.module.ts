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
<<<<<<< HEAD
import {MatTableModule} from '@angular/material/table';
=======
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
>>>>>>> 1f6419119b611edd9475fda3688d7edf05f641f6

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
<<<<<<< HEAD
import { MultiBulletComponent } from './features/multi-bullet/multi-bullet.component';
import { EmitReceiveComponent } from './features/emit-receive/emit-receive.component';
import { MultiGraphOperationsComponent } from './features/multi-graph-operations/multi-graph-operations.component';
=======
import { GraphOperations2Component } from './features/graph-operations2/graph-operations2.component';
import { PagosComponent } from './presentations/pagos/pagos.component';
import { TableOperationsPagosComponent } from './features/table-operations-pagos/table-operations-pagos.component';
import { FiltersPagosComponent } from './features/filters-pagos/filters-pagos.component';
import { OperationDetailsBajaComponent } from './features/operation-details-baja/operation-details-baja.component';
>>>>>>> 1f6419119b611edd9475fda3688d7edf05f641f6
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
<<<<<<< .mine
    SidenavComponent,
<<<<<<< HEAD
=======
    SidenavComponent,
>>>>>>> .theirs
    MultiBulletComponent,
    EmitReceiveComponent,
    MultiGraphOperationsComponent
=======
    GraphOperations2Component,
    PagosComponent,
    TableOperationsPagosComponent,
    FiltersPagosComponent,
    OperationDetailsBajaComponent
>>>>>>> 1f6419119b611edd9475fda3688d7edf05f641f6
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
    GridsterModule,
    DropdownModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
