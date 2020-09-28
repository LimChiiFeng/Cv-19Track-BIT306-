import { Component, ViewChild } from '@angular/core';
import { Test } from './testReport.model';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('sidebar') sidebar: SidebarComponent;

public showBackdrop: boolean = true;
public type: string = 'Push';
public width: string ='280px';
public closeOnDocumentClick: boolean = true;
public onCreated(args: any) {
  this.sidebar.element.style.visibility = '';
}
closeClick(): void {
  this.sidebar.hide();
};
toggleClick():void{
  this.sidebar.show();
}
  title = 'cv19t';
  storedTestReports:Test[]=[];

  onTestReportsAdded(test){
    this.storedTestReports.push(test);
  }
}
