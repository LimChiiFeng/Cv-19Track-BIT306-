import { Component, OnInit } from '@angular/core';
import { ReportService } from "../report.service";

@Component({
  selector: 'manager-report',
  templateUrl: './manager-report.component.html',
  styleUrls: ['./manager-report.component.css']
})
export class ManagerReportComponent implements OnInit {
    reports: any [] = [];
    searchStr: string;

  constructor(public reportService: ReportService) { }

  ngOnInit(): void {
      this.reports = this.reportService.getTest();
  }

    searchReport(){
        if(this.searchStr=="") {
        this.ngOnInit();
        } else{
            
        this.reports = this.reportService.getTest().filter(res=>{
            return res.testName.toLocaleLowerCase().match(
                this.searchStr.toLocaleLowerCase());
            })
        }
    }
}

