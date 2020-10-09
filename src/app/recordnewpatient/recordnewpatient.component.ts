import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TestReportService } from '../testReport.service';

@Component({
  selector: 'patient-component',
  templateUrl: 'recordnewpatient.component.html',
  styleUrls:['./recordnewpatient.component.css']
})

export class RecordNewPatient implements OnInit{
  static genID:number = 0;
  get genID():number {return this.constructor["genID"];}
  set genID(innum:number) {this.constructor["genID"] = innum;}

  constructor(
  public testreportservice: TestReportService, private dialogRef:MatDialogRef<RecordNewPatient>) { }


  ngOnInit() {
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

  onAddPatient(form:NgForm){
    if(form.invalid){
      return;
    }
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
    this.testreportservice.addPatient(form.value.username,form.value.password,form.value.fullname,form.value.patienttype,form.value.symptom)
    this.dialogRef.close();
  }
}
