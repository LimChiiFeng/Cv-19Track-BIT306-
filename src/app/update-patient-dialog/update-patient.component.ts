import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestReportService } from '../testReport.service';

@Component({
  selector: 'update-patient',
  templateUrl: 'update-patient.component.html',
  styleUrls:['./update-patient.component.css']
})

export class UpdatePatientComponent implements OnInit {
  constructor(public testreportservice:TestReportService, private dialogRef:MatDialogRef<UpdatePatientComponent>, @Inject(MAT_DIALOG_DATA) public receiPat: any) { }

  ngOnInit() { }

  onUpdatePatient(form:NgForm){
    if(form.invalid){
      return;
    }

    this.testreportservice.updatePatient(this.receiPat.pspatient.username, form.value.patienttype,form.value.symptom);
    this.dialogRef.close();
  }
}
