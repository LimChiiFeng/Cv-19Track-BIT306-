import { Component } from '@angular/core';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { TestKitsService } from '../test_kit.service'
import { MatDialogRef } from '@angular/material/dialog';
import { TestKit } from '../test_kit.model';

@Component({
  selector: 'add-kit',
  templateUrl: './add-kit.component.html',
  styleUrls: ['./add-kit.component.css']
})
export class AddKitComponent {
  // ,private addKitDialog: MatDialogRef<AddKitComponent>
  // stockControl = new FormControl(0,Validators.min(1))

  constructor(public kitsService: TestKitsService, private addKitDialog: MatDialogRef<AddKitComponent>) { }

  // stockControl = new FormControl()

  addKit(kitForm: NgForm){
    if(kitForm.invalid){
      // console.log(kitForm.value.availableStock)
      return
    } else if(kitForm.value.availableStock <= 0) {
      return
    }
    // console.log(this.stockControl)
    this.kitsService.addTestKit(kitForm.value.testName,kitForm.value.availableStock);
    console.log('Success!');
    this.addKitDialog.close();
    kitForm.resetForm();
  }
}
