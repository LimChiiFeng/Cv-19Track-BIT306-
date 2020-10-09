import { Component,OnInit } from '@angular/core';
import { TestKitsService } from '../test_kit.service';
import { TestKit } from "../test_kit.model";
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'update-kit',
  templateUrl: './update-kit.component.html',
  styleUrls: ['./update-kit.component.css']
})
export class UpdateKitComponent implements OnInit {
    testKits: TestKit[] = [];

    constructor(public kitsService: TestKitsService, 
        private updateKitDialog: MatDialogRef<UpdateKitComponent>) { }

    //for retrieve current test kitsa
    ngOnInit(){
        this.testKits = this.kitsService.getTestKit();
    }

    //to update the available stock
    updateStock(updateForm: NgForm){
        if(updateForm.invalid) {
            return;
        }
        this.kitsService.updateStockNum(updateForm.value.kitID, 
            updateForm.value.stockNum);
        updateForm.resetForm();
           this.updateKitDialog.close();
        
    }
}


