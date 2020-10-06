import { Component, OnInit } from '@angular/core';
import { TestersService } from '../../tester_record/tester.service';

@Component({
  selector: 'manager-report',
  templateUrl: './manager-report.component.html',
  styleUrls: ['./manager-report.component.css']
})
export class ManagerReportComponent implements OnInit {
    testers: any [] = [];
    searchStr: string;

  constructor(public testerService: TestersService) { }

  ngOnInit(): void {
      this.testers = this.testerService.getTesters();
      console.log(this.testers);
  }

    searchReport(){
        if(this.searchStr=="") {
        this.ngOnInit();
        } else{
            
        this.testers = this.testerService.getTesters().filter(res=>{
            return res.name.toLocaleLowerCase().match(this.searchStr.toLocaleLowerCase());
            })
        }
    }
}
