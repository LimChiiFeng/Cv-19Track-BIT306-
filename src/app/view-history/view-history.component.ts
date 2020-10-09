import { Component, OnInit } from '@angular/core';
import { Patient, Test } from '../testReport.model';
import { TestReportService } from '../testReport.service';

@Component({
  selector: 'view-history',
  templateUrl: 'view-history.component.html',
  styleUrls: ['./view-history.component.css']
})

export class ViewHistoryComponent implements OnInit {
  patientList:Patient[]=[];
  testlist: Test[]=[];
  history:Test[]=[];
  constructor(public testreportservice:TestReportService) { }


  ngOnInit() {
    this.patientList = this.testreportservice.getPatient();
    this.testlist = this.testreportservice.getTest();

    this.testlist.forEach(res=>{
      if(res.patientusername == "Patient 1"){
        this.history.push(res);
      }
    })
  }

  onFilterComplete(status:string){
    this.history =[];
    if(status == null){
      this.history=this.testreportservice.getTest();
    }else{
    this.testreportservice.getTest().forEach(res=>{
      if(res.teststatus == status){
        this.history.push(res);
      }
    })
  }
}
}
