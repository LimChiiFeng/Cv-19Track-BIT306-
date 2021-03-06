import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent} from './header/header.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecordNewTest } from './recordNewTest/recordnewtest.component';
import { TestListComponent } from './testlist/testlist.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from'@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from "@angular/material/expansion";

const appRoutes: Routes = [
  {path:'reportlist', component:TestListComponent},
  {path:'recordnewtest', component:RecordNewTest}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
