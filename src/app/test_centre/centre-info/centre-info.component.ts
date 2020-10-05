import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCentreComponent } from '../create-centre/create-centre.component';
import { TestCentre } from "../test_centre.model";
import { TestCentreService } from "../test_centre.service";
import { TestersService } from "../../tester_record/tester.service";
import { TestKitsService } from "../../test_kit/test_kit.service";
import { MatSnackBar } from "@angular/material/snack-bar";


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
    public testerService: TestersService, public kitService:TestKitsService, private snackBar:MatSnackBar){};

  ngOnInit(){
    this.centre = this.centreService.getCentre();
    this.testerNum = this.testerService.getTesters().length;
    this.kitNum = this.kitService.getTestKit().length;
    
    if(this.centre.length==0){
        this.snackBar.open('Test Centre have been approved, please register the centre name.','Close',{
            duration: 2500,
        });
    }
    
  }

  centreRegDialog(){
    this.centreDialog.open(CreateCentreComponent,{
      width:'50%',
      autoFocus:false,
    });
  }
}
