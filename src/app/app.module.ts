import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { LogoComponent } from './header/logo/logo.component';
// import { TesterRecordComponent } from "./tester_record/tester_record.component";
import { CreateCentreComponent } from './test_centre/create-centre/create-centre.component';
import { CentreInfoComponent } from './test_centre/centre-info/centre-info.component';
import { AddKitComponent } from './test_kit/add-kit/add-kit.component';
import { KitInfoComponent } from './test_kit/kit-info/kit-info.component';
import { UpdateKitComponent } from './test_kit/update-kit/update-kit.component';
import { AddTesterComponent } from './tester_record/add-tester/add-tester.component';
import { TestListComponent } from './recordNewTest/testlist/testlist.component';
import { RecordNewTest } from './recordNewTest/recordnewtest.component';
import { TesterInfoComponent } from './tester_record/tester-info/tester-info.component';

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
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';




const appRoutes: Routes = [
  {path: 'testCentre', component: CentreInfoComponent},
  {path: 'recordTester', component: TesterInfoComponent},
  {path: 'testKit', component: KitInfoComponent},
  {path: 'newTest', component: RecordNewTest}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LogoComponent,
    // TesterRecordComponent,
    CreateCentreComponent,
    CentreInfoComponent,
    AddKitComponent,
    KitInfoComponent,
    UpdateKitComponent,
    AddTesterComponent,
    TesterInfoComponent,
    RecordNewTest,
    TestListComponent
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
