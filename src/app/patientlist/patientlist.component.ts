import { Component, OnInit} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { RecordNewPatient } from '../recordnewpatient/recordnewpatient.component';
import { Patient } from '../testReport.model';
import { TestReportService } from '../testReport.service';
import { UpdatePatientComponent } from '../update-patient-dialog/update-patient.component';

@Component({
  selector:'testlist',
  templateUrl:'./patientlist.component.html',
  styleUrls:['./patientlist.component.css']
})


export class PatientListComponent implements OnInit{
  patientlist:Patient[]=[];
  srchStr:string;
  isblankb4srch:boolean;
  tID:string;
  tDate:Date;
  constructor(public testreportservice:TestReportService, public dialog:MatDialog){}

  ngOnInit(){
    this.patientlist=this.testreportservice.getPatient();
    this.isblankb4srch = false;

  }
  searchTest(){
    this.isblankb4srch = true;
    console.log(this.isblankb4srch)
    if(this.srchStr == ""){
      this.ngOnInit();
      console.log("if was blank statement");
      console.log(this.patientlist);
    }
    else{
      this.patientlist = this.testreportservice.getPatient().filter(res=>{
        return res.patientName.match(this.srchStr);
      });
      console.log("Go to else");
      // console.log(this.testlists);
      // console.log(this.testreportservice.getTest());
    }
  }
  onAddPatientDialog(){
    const dialogRef = this.dialog.open(RecordNewPatient, {
      disableClose: false,autoFocus: true});
      dialogRef.afterClosed().subscribe(res=>{
        console.log(this.patientlist);
        // console.log("右上角的");
      })
        // console.log("第二个的");
        // console.log(this.testlists);
        // console.log(this.testreportservice.getTest())
  }

  show(patient){
    this.dialog.open(UpdatePatientComponent,{autoFocus:true,data:{pspatient:patient}});
  }

  removePatient(patient){
    this.testreportservice.removePatient(patient);
  }

}
