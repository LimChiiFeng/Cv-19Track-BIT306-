import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestCentreService } from '../test_centre.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'create-centre',
  templateUrl: './create-centre.component.html',
  styleUrls: ['./create-centre.component.css']
})
export class CreateCentreComponent{
  constructor(public centreService:TestCentreService, 
    private centreRef: MatDialogRef<CreateCentreComponent>){}

  //to register Test Centre
  centreCreate(centreForm: NgForm){
    if(centreForm.invalid){
      return;
    }
    this.centreService.createCentre(centreForm.value.centreName);
    this.centreRef.close();
    centreForm.reset();
  }
}
