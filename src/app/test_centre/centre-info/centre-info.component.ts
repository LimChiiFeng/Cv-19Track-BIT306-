import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCentreComponent } from '../create-centre/create-centre.component';
import { TestCentre } from "../test_centre.model";
import { TestCentreService } from "../test_centre.service";
import { TestKitsService } from "../../test_kit/test_kit.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UsersService } from 'src/app/user.service';


@Component({
  selector: 'centre-info',
  templateUrl: './centre-info.component.html',
  styleUrls: ['./centre-info.component.css']
})
export class CentreInfoComponent implements OnInit {
  centre: TestCentre[] = [];
  testerNum:number = 0;
  kitNum:number = 0;

  constructor(public centreDialog: MatDialog, public centreService:TestCentreService, 
    public kitService:TestKitsService, private snackBar:MatSnackBar,
    public userService: UsersService){};

  ngOnInit(){
    this.centre = this.centreService.getCentre();
    this.kitNum = this.kitService.getTestKit().length;
    
    //to find how many Tester in the Centre
    const user = this.userService.getUser().filter(res=>{
        return res.position == 'Tester';
    })

    //put the number of the Tester
    this.testerNum = user.length;

    //To show a tooltips for informing manager haven't register Test Centre
    if(this.centre.length==0){
        this.snackBar.open('Test Centre have been approved,'+
        ' please register the centre name.','Close',{
            duration: 2500
        });
    }
  }

  //to open a dialog for manager to register Test Centre
  centreRegDialog(){
    this.centreDialog.open(CreateCentreComponent,{
      width:'50%',
      autoFocus:false,
      disableClose:true
    });
  }
}
