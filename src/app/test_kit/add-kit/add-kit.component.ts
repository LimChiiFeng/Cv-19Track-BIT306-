import { Component } from '@angular/core';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { TestKitsService } from '../test_kit.service'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-kit',
  templateUrl: './add-kit.component.html',
  styleUrls: ['./add-kit.component.css']
})
export class AddKitComponent {
  constructor(public kitsService: TestKitsService, 
    private addKitDialog: MatDialogRef<AddKitComponent>) { }

  //pass and push test kit into the Test Kit Service
  addKit(kitForm: NgForm){
    if(kitForm.invalid){
      return
    } else if(kitForm.value.availableStock <= 0) {
      return
    }
    this.kitsService.addTestKit(kitForm.value.testName,kitForm.value.availableStock);
    kitForm.resetForm();
    this.addKitDialog.close(); //after the form submit successful, close the dialog
    
  }
}

