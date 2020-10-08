import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestCentreService } from './test_centre/test_centre.service'
import { UsersService } from './user.service';
import { User } from './user.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'CTIS';
    users: User[] = [];
    user: User;
    centre;
    username:string;
    constructor(public centreService:TestCentreService, private snackBar:MatSnackBar, public userService: UsersService){}

    ngOnInit(){
        this.centre = this.centreService.getCentre();
        this.users = this.userService.getUser();
        console.log(this.userService.checkUser('Manager01'));

        // if(this.centre.length==0){
        //     this.snackBar.open('Test Centre have been approved, please register the centre name.','Close',{
        //         duration: 2500,
        //     });
        // }
    }

    login(form: NgForm){
        this.user = this.userService.checkUser(form.value.username);
        if(form.invalid){
            return
        }
        
        if(this.user == null){
            console.log('no user')
            return
        } else {
            console.log('got user')
        }
    }
  
}
