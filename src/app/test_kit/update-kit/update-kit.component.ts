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

    
    constructor(public kitsService: TestKitsService, private updateKitDialog: MatDialogRef<UpdateKitComponent>) { }

    ngOnInit(){
        this.testKits = this.kitsService.getTestKit();
    }

    updateStock(updateForm: NgForm){
        if(updateForm.invalid) {
            return;
        }
        this.kitsService.updateStockNum(updateForm.value.kitID, updateForm.value.stockNum);
        this.updateKitDialog.close();
        updateForm.resetForm();

        // this.testKits.forEach(kit => {
        //     if(updateForm.value.kitID === kit.kitID){
        //         console.log(true)
        //         console.log('kitID: '+kit.kitID);
        //         kit.availableStock += updateForm.value.stockNum;
        //         console.log('stock number: '+kit.availableStock)
        //     }
        // });
        // console.log(updateForm.value.tname)
    }
}
