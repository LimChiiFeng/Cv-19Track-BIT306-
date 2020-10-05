import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Test } from "../testReport.model";
import { TestReportService } from '../testReport.service';

@Component({
  selector:'app-new-test',
  templateUrl:'./recordnewtest.component.html',
  styleUrls:['./recordnewtest.component.css']
})

export class RecordNewTest {
  TestName='';
  TestResult='';
  constructor(public testreportservice:TestReportService,
    private dialogRef: MatDialogRef<RecordNewTest>){}

  onAddTest(form: NgForm){
    if (form.invalid){
      return;
    }
    this.testreportservice.addTest(form.value.testname,form.value.testresult,form.value.patienttype);
    this.dialogRef.close();
  }
}
