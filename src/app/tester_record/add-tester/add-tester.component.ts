import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../user.service';

@Component({
  selector: 'add-tester',
  templateUrl: './add-tester.component.html',
  styleUrls: ['./add-tester.component.css']
})
export class AddTesterComponent{
    constructor(private recordDialog:MatDialogRef<AddTesterComponent>,
        public userService:UsersService){}

    // To record a new tester
    recordTester(recordForm: NgForm){
        if(recordForm.invalid){
            return
        }
        var username=recordForm.value.username;
        var password=recordForm.value.password;
        var name=recordForm.value.name;

        this.userService.addTester(username,password,name);
        recordForm.resetForm();
        this.recordDialog.close();    
    }

}

