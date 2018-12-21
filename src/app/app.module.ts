import { TitleService } from './services/title.service';
import { OperationDetailsBajaComponent } from './features/operation-details-baja/operation-details-baja.component';
import { FiltersPagosComponent } from './features/filters-pagos/filters-pagos.component';
import { PagosComponent } from './presentations/pagos/pagos.component';
// import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth-guard';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GridsterModule } from 'angular-gridster2';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';




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
import { TableOperationsPagosComponent } from './features/table-operations-pagos/table-operations-pagos.component';
import { FiltersDashboardComponent } from './features/filters-dashboard/filters-dashboard.component';
import { FiltersEmitidasComponent } from './features/filters-emitidas/filters-emitidas.component';
import { FiltersRecibidasComponent } from './features/filters-recibidas/filters-recibidas.component';
import { FiltersBuscadorComponent } from './features/filters-buscador/filters-buscador.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { MeterBalaComponent } from './features/meter-bala/meter-bala.component';
import { ChartsModule } from 'ng2-charts';
import 'chartjs-plugin-zoom';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {RadioButtonModule} from 'primeng/radiobutton';

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
        MultiGraphOperationsComponent,
        PagosComponent,
        // GraphOperations2Component,
        TableOperationsPagosComponent,
        FiltersPagosComponent,
        OperationDetailsBajaComponent,
        FiltersDashboardComponent,
        FiltersEmitidasComponent,
        FiltersRecibidasComponent,
        FiltersBuscadorComponent,
        MeterBalaComponent,
    ],
    imports: [
        BrowserModule,
        RadioButtonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxChartsModule,
        NgbModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        GridsterModule,
        DropdownModule,
        CalendarModule,
        MultiSelectModule,
        ChartsModule
    ],
    providers: [AuthGuard, TitleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
