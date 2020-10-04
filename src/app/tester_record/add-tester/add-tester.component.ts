import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { TestersService } from '../tester.service';

@Component({
  selector: 'add-tester',
  templateUrl: './add-tester.component.html',
  styleUrls: ['./add-tester.component.css']
})
export class AddTesterComponent{
    

    constructor(public testers:TestersService,private recordDialog:MatDialogRef<AddTesterComponent>){}

    recordTester(recordForm: NgForm){
        if(recordForm.invalid){
            return
        }
        var username=recordForm.value.username;
        var password=recordForm.value.password;
        var name=recordForm.value.name;

        this.testers.addTester(username,password,name);
        console.log('Addding Success');
        recordForm.resetForm();
        this.recordDialog.close();
        
    }

}
