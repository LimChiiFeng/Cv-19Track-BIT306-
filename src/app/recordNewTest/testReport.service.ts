import { Test } from './testReport.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class TestReportService{
  private testlist:Test[]=[];

  getTest(){
    return this.testlist;
  }

  addTest(testname:string, testresult:string){
    const test: Test = {testname:testname, testresult:testresult};
    this.testlist.push(test);
  }
}
