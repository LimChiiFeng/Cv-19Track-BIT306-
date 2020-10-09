import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test } from '../testReport.model';
import { TestListComponent } from '../testlist/testlist.component'
import { TestReportService } from '../testReport.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'update-dialog',
  templateUrl: 'update-dialog.component.html',
  styleUrls:['./update-dialog.component.css']
})

export class UpdateDialogComponent {
  constructor(public testreportservice: TestReportService, private dialogRef:MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public psname:any) { }


  onUpdateTest(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log("Update Test ID: " +form.value.testId);

    var resDate:Date = new Date();

    this.testreportservice.updateTest(this.psname.psdata.TestID, form.value.testresult, resDate);
    this.dialogRef.close();
  }


}
