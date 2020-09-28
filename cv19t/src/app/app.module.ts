import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent} from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { RecordNewTest } from './recordNewTest/recordnewtest.component';
import { TestListComponent } from './testlist/testlist.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from'@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from "@angular/material/expansion";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

const appRoutes: Routes = [
  {path:'reportlist', component:TestListComponent},
  {path:'recordnewtest', component:RecordNewTest}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordNewTest,
    TestListComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
