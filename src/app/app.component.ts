import { Component, OnInit, ViewChild } from '@angular/core';
import { TestCentreService } from './test_centre/test_centre.service'
import { UsersService } from './user.service';
import { User } from './user.model';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Test } from './testReport.model';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';


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
    checkTesterNav: boolean = true;

    @ViewChild('sidebar') sidebar: SidebarComponent;
    
    public showBackdrop: boolean = true;
    public type: string = 'Push';
    public width: string ='280px';
    public closeOnDocumentClick: boolean = true;
    public onCreated(args: any) {
    this.sidebar.hide();
    }
    closeClick(): void {
    this.sidebar.hide();
    };
    toggleClick():void{
    this.sidebar.show();
    }
    storedTestReports:Test[]=[];

    onTestReportsAdded(test){
      this.storedTestReports.push(test);
    }

    constructor(public centreService:TestCentreService,public userService: UsersService){}

    ngOnInit(){
        this.centre = this.centreService.getCentre();
        this.users = this.userService.getUser();
        console.log(this.userService.checkUser('Manager01'));
    }

    login(form: NgForm){
        if(form.invalid){
            return
        }
        var username = form.value.username;
        var password = form.value.password;

        this.users.forEach(res=>{
            if(username == res.username){
                if(password == res.password){
                    this.user = res;
                    console.log('Success!')
                } else{
                    document.getElementById('passwordError');
                    console.log('password error')
                    return;
                    
                }
            } else {
                return
            }
        })
        
        // document.getElementById('testDiv').style.display="none";
        console.log(this.user)
        if(this.user!=null){
            document.getElementById('login').style.display = "none";
            if(this.user.type=="Officer"){
                if(this.user.position == 'Manager')
                    document.getElementById('managerNav').style.display = "block";
                else {
                    document.getElementById('testerClass').style.display = "block";
                    this.checkTesterNav = false;
                    console.log(this.checkTesterNav);
                }
            } else if(this.user.type == 'Patient') {
                document.getElementById('patientNav').style.display = "block";
            }
        }
        
    }
  
}
