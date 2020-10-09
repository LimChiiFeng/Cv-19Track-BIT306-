import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test, TestKit } from "../testReport.model";
import { TestReportService } from '../testReport.service';

@Component({
  selector:'app-new-test',
  templateUrl:'./recordnewtest.component.html',
  styleUrls:['./recordnewtest.component.css']
})

export class RecordNewTest implements OnInit{
  testkits:TestKit[]=[];
  curDate = new Date();
  static genID:number = 0;
  get genID():number {return this.constructor["genID"];}
  set genID(innum:number) {this.constructor["genID"] = innum;}
  constructor(public testreportservice:TestReportService,
    private dialogRef: MatDialogRef<RecordNewTest>, @Inject(MAT_DIALOG_DATA) public data:TestKit){


      // console.log(typeof(this.genID))
      // console.log(this.genID);
      // this.genID = 5;
      // console.log(this.genID);
    }

    ngOnInit(): void {
      this.testkits = this.testreportservice.getTestKit();
      this.genID=0;
      if(this.testreportservice.getTest().length > 0) {
        console.log('halo');
        var strID: string;
        var numID: number;
        this.testreportservice.getTest().forEach(res=>{ //grab Test from array
          strID = res.TestID.substr(1);                 //eliminate string to compare
          numID = parseInt(strID);
          if(this.genID < numID){
            console.log("if less than numID")
             this.genID = numID;

            }
            })

            console.log('this is id');
            console.log(this.genID);
      }

    }

  onAddTest(form: NgForm){
    if (form.invalid){
      return;
    }
    //extra
    var genID:string;
    ++this.genID;
    if(this.genID < 10){
      genID = "T00" + this.genID;
      console.log(this.genID)
      console.log('genID')
      console.log(genID)
    } else if(this.genID >= 10 && this.genID < 100){
      genID = "T0"+this.genID;
    } else {
      genID = 'T'+this.genID;
    }

    /**
    const skitID = form.value.testname;
    var testname:String;

    this.testkits.forEach(res=>{
      if(res.kitID == skitID){
        testname = res.testName;
      }
    })
*/




    this.testreportservice.addPatient(form.value.username,form.value.password,form.value.fullname,form.value.patienttype,form.value.symptom);
    this.testreportservice.addTest(genID,form.value.testresult,this.curDate,"pending", form.value.username, form.value.resDate);
    this.dialogRef.close();
  }



}
