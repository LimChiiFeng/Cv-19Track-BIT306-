import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCentreComponent } from '../create-centre/create-centre.component';
import { TestCentre } from "../test_centre.model";
import { TestCentreService } from "../test_centre.service";

@Component({
  selector: 'centre-info',
  templateUrl: './centre-info.component.html',
  styleUrls: ['./centre-info.component.css']
})
export class CentreInfoComponent implements OnInit {
  centre: TestCentre[] = [];

  constructor(public centreDialog: MatDialog, public centreService:TestCentreService){};

  ngOnInit(){
    this.centre=this.centreService.getCentre();
  }

  centreRegDialog(){
    this.centreDialog.open(CreateCentreComponent,{
      width:'50%',
      autoFocus:false,
    });
  }
}
