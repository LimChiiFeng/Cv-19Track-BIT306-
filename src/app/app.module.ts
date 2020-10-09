import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { LogoComponent } from './header/logo/logo.component';
import { CreateCentreComponent } from './test_centre/create-centre/create-centre.component';
import { CentreInfoComponent } from './test_centre/centre-info/centre-info.component';
import { AddKitComponent } from './test_kit/add-kit/add-kit.component';
import { KitInfoComponent } from './test_kit/kit-info/kit-info.component';
import { UpdateKitComponent } from './test_kit/update-kit/update-kit.component';
import { AddTesterComponent } from './tester_record/add-tester/add-tester.component';
import { TestListComponent } from './testlist/testlist.component';
import { RecordNewTest } from './recordNewTest/recordnewtest.component';
import { TesterInfoComponent } from './tester_record/tester-info/tester-info.component';
import { ManagerReportComponent } from './test_report/manager-report/manager-report.component';
import { UpdateDialogComponent } from './update-dialog.component/update-dialog.component';
import { RecordNewPatient } from './recordnewpatient/recordnewpatient.component';
import { PatientListComponent } from './patientlist/patientlist.component';
import { UpdatePatientComponent } from './update-patient-dialog/update-patient.component';
import { ViewHistoryComponent } from './view-history/view-history.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: 'testCentre', component: CentreInfoComponent},
  {path: 'recordTester', component: TesterInfoComponent},
  {path: 'testKit', component: KitInfoComponent},
  {path: 'newTest', component: RecordNewTest},
  {path: 'managerReport', component: ManagerReportComponent},
  {path:'reportlist', component:TestListComponent},
  {path:'patientlist', component:PatientListComponent},
  {path:'viewhistory', component:ViewHistoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LogoComponent,
    CreateCentreComponent,
    CentreInfoComponent,
    AddKitComponent,
    KitInfoComponent,
    UpdateKitComponent,
    AddTesterComponent,
    TesterInfoComponent,
    RecordNewTest,
    TestListComponent,
    ManagerReportComponent,
    UpdateDialogComponent,
    RecordNewPatient,
    PatientListComponent,
    UpdatePatientComponent,
    ViewHistoryComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSidenavModule,
    SidebarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
