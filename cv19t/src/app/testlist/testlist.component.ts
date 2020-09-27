import { Component, OnInit} from "@angular/core";
import { Test } from '../testReport.model';
import { TestReportService } from '../testReport.service';

@Component({
  selector:'testlist',
  templateUrl:'./testlist.component.html',
  styleUrls:['./testlist.component.css']
})


export class TestListComponent implements OnInit{
  testlists:Test[]=[];

  constructor(public testreportservice:TestReportService){}

  ngOnInit(){
    this.testlists=this.testreportservice.getTest();
  }
}
