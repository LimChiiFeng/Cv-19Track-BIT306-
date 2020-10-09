import { Patient, Test, TestKit } from './testReport.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class TestReportService{
tdate:Date = new Date();
  private patientlist:Patient[]=[
    // {username:'Patient 1',password:'Patient 1',patientName:'Alibaba',patienttype:'Returnee',symptom:'hahaha'}
  ];

   private testlist:Test[]=[
    // {TestID: 'T001', testresult:'Result A', testDate:this.tdate, resultDate:this.tdate, teststatus: 'pending', patientusername:'Patient 1'},
    // {TestID: 'T002', testresult:'Result A', testDate:this.tdate, resultDate:this.tdate, teststatus:'complete', patientusername:'Patient 1'},
    // {TestID: 'T003', testname:'Test Name 3', testresult:'Result A', patienttype:'Closed Contact', testDate:this.tdate},
    // {TestID: 'T005', testname:'Test Name 5', testresult:'Result A', patienttype:'Closed Contact', testDate:this.tdate},
    // {TestID: 'T008', testname:'Test Name 9', testresult:'Result A', patienttype:'Closed Contact', testDate:this.tdate},
  ];

  //get id():number {return this.id.constructor["id"];}
  //set id(innum:number) {this.id.constructor["id"] = innum;}
  // constructor(){}
  private testKit: TestKit[] = [
    {kitID: 2, testName:'Rapid Test Kit', availableStock: 10, centreID: 1},
    {kitID: 5, testName:'RTK Test for Antigen Detection', availableStock: 2, centreID: 1},
    {kitID: 6, testName:'Rapid Diagnostic Test', availableStock: 25, centreID: 2},
    {kitID: 7, testName:'PCR Test', availableStock: 6, centreID: 2},
    {kitID: 9, testName:'Neutralizing vs. Binding Antibodies', availableStock: 2, centreID: 1},
    {kitID: 10, testName:'Enzyme-linked Immunosorbent Assay', availableStock: 50, centreID: 2},
    {kitID: 11, testName:'Neutralization Assay', availableStock: 14, centreID: 1},
    {kitID: 16, testName:'Chemiluminescent Immunoassay', availableStock: 9, centreID: 1},
  ];

  //

  getTestKit(){
    return this.testKit;
  }
  getTest(){
    // console.log("fasdfs");
    // console.log("Test ID: " + this.id.constructor["id"]);
    return this.testlist;

  }

  getPatient(){
    return this.patientlist;
  }

  getTestSrchList(){
    const testsrchlist:any[]=[];
    this.testlist.forEach(res=>{
      this.patientlist.forEach(out=>{
        if(out.username == res.patientusername){
          const list = Object.assign(res,out)
          console.log(list);

          testsrchlist.push(list);
        }
      })
    })
    return testsrchlist;
  }

  addPatient(username:string,password:string,name:string,patienttype:string,symptom:string){
    if(!(this.patientlist.some(patient=>patient.username === username))){
      const patient: Patient = {username:username, password:password, patientName:name, patienttype:patienttype, symptom:symptom};
    this.patientlist.push(patient);
    }

  }

  addTest(testID:string, testresult:string, testDate:Date, tstatus:string, username:string, resDate:Date){
    const test: Test = {TestID:testID, testresult:testresult, testDate:testDate,teststatus:tstatus, patientusername:username, resultDate:resDate};
    this.testlist.push(test);
    console.log(this.testlist);
  }

  removeTest(test:Test){
    console.log(this.testlist);
    console.log("remove知前")
    var remvtestid:number = this.testlist.indexOf(test);
    this.testlist.splice(remvtestid,1);
    console.log(this.testlist);
    console.log("remove之后")

  }

  removePatient(patient:Patient){
    console.log(this.patientlist);
    console.log("remove知前");
    var remvtestid:number = this.patientlist.indexOf(patient);
    this.patientlist.splice(remvtestid,1);
    console.log(this.patientlist);
    console.log("remove之后")

  }
  updateTest(testID:string,tresult:string,resDate:Date){
    console.log("Now for update in testReportService:");
    this.testlist.forEach(res=>{
      if(res.TestID == testID){
        console.log("Got go here update");
        res.testresult = tresult;
        res.teststatus = "complete";
        res.resultDate = resDate;
      }
    })
    console.log("after update:")
    console.log(this.testlist)
  }

  updatePatient(username:string,patienttype:string,symptom:string){
    console.log("Now for update in testReportService:");
    this.patientlist.forEach(res=>{
      if(res.username == username){
        console.log("Got go here update");
        res.patienttype = patienttype;
        res.symptom = symptom;
      }
    })
    console.log("after update:")
    console.log(this.testlist)
  }


}
