import { Patient, Test, TestKit } from './report.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class ReportService{
tdate:Date = new Date();
  private patientlist:Patient[]=[
    // {username:'Patient 1',password:'Patient 1',patientName:'Alibaba',patienttype:'Returnee',symptom:'hahaha'}
  ];

   private testlist:Test[]=[
  {TestID: 'T001',testName:"Rapid Test Kit",testresult:'Positive', testDate:this.tdate, resultDate:this.tdate,teststatus: 'completed', patientusername:'Patient 1'},
  {TestID: 'T002',testName:"PCR Test", testresult:'', testDate:this.tdate, resultDate:null,teststatus: 'pending', patientusername:'Patient 3'},
  {TestID: 'T004',testName:"Rapid Test Kit", testresult:'Positive', testDate:this.tdate, resultDate:this.tdate,teststatus: 'completed', patientusername:'Patient 5'},
  {TestID: 'T007',testName:"Enzyme-linked Immunosorbent Assay", testresult:'Negative', testDate:this.tdate, resultDate:this.tdate,teststatus: 'completed', patientusername:'Patient 3'},
  {TestID: 'T011',testName:"Enzyme-linked Immunosorbent Assay", testresult:'Result A', testDate:this.tdate, resultDate:null,teststatus: 'pending', patientusername:'Patient 3'},
  {TestID: 'T021',testName:"RTK Test for Antigen Detection", testresult:'Result A', testDate:this.tdate, resultDate:null,teststatus: 'pending', patientusername:'Patient 2'},
  ];
  getTest(){
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

//   addPatient(username:string,password:string,name:string,patienttype:string,symptom:string){
//     if(!(this.patientlist.some(patient=>patient.username === username))){
//       const patient: Patient = {username:username, password:password, patientName:name, patienttype:patienttype, symptom:symptom};
//     this.patientlist.push(patient);
//     }

//   }

//   addTest(testID:string, testresult:string, testDate:Date, tstatus:string, username:string, resDate:Date){
//     const test: Test = {TestID:testID, testresult:testresult, testDate:testDate,teststatus:tstatus, patientusername:username, resultDate:resDate};
//     this.testlist.push(test);
//     console.log(this.testlist);
//   }

//   removeTest(test:Test){
//     console.log(this.testlist);
//     console.log("remove知前")
//     var remvtestid:number = this.testlist.indexOf(test);
//     this.testlist.splice(remvtestid,1);
//     console.log(this.testlist);
//     console.log("remove之后")

//   }

//   removePatient(patient:Patient){
//     console.log(this.patientlist);
//     console.log("remove知前");
//     var remvtestid:number = this.patientlist.indexOf(patient);
//     this.patientlist.splice(remvtestid,1);
//     console.log(this.patientlist);
//     console.log("remove之后")

//   }
//   updateTest(testID:string,tresult:string,resDate:Date){
//     console.log("Now for update in testReportService:");
//     this.testlist.forEach(res=>{
//       if(res.TestID == testID){
//         console.log("Got go here update");
//         res.testresult = tresult;
//         res.teststatus = "complete";
//         res.resultDate = resDate;
//       }
//     })
//     console.log("after update:")
//     console.log(this.testlist)
//   }

//   updatePatient(username:string,patienttype:string,symptom:string){
//     console.log("Now for update in testReportService:");
//     this.patientlist.forEach(res=>{
//       if(res.username == username){
//         console.log("Got go here update");
//         res.patienttype = patienttype;
//         res.symptom = symptom;
//       }
//     })
//     console.log("after update:")
//     console.log(this.testlist)
//   }


}
