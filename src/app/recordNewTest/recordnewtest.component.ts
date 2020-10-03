import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Test } from "./testReport.model";
import { TestReportService } from './testReport.service';

@Component({
  selector:'app-new-test',
  templateUrl:'./recordnewtest.component.html',
  styleUrls:['./recordnewtest.component.css']
})

export class RecordNewTest {
  TestName='';
  TestResult='';
  constructor(public testreportservice:TestReportService){}

  onAddTest(form: NgForm){
    if (form.invalid){
      return;
    }
    this.testreportservice.addTest(form.value.testname,form.value.testresult);
  }
}
