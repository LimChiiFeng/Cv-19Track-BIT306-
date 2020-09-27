import { Component } from '@angular/core';
import { Test } from './testReport.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv19t';
  storedTestReports:Test[]=[];

  onTestReportsAdded(test){
    this.storedTestReports.push(test);
  }
}
