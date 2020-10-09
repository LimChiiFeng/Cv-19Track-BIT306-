import { Component,OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from '@angular/material/sort';
import { AddKitComponent } from '../add-kit/add-kit.component';
import { TestKit } from '../test_kit.model';
import { TestKitsService } from '../test_kit.service';
import { UpdateKitComponent } from '../update-kit/update-kit.component';

@Component({
  selector: 'kit-info',
  templateUrl: './kit-info.component.html',
  styleUrls: ['./kit-info.component.css']
})
export class KitInfoComponent implements OnInit {
  testKits: TestKit[] = [];
  searchStr:String;

  constructor(public kitDialog: MatDialog, 
    public kitsService: TestKitsService){}

  ngOnInit(){
    this.testKits= this.kitsService.getTestKit();
  } 

  //to open a dialog for adding a new test kit
  addKitDialog(){
    const dialogRef=this.kitDialog.open(AddKitComponent,{
      width:'40%',
      autoFocus: false,
      disableClose:true
    })
  }

  //to open a dialog for updating stock of the current test kit
  updateKitDialog(){
    this.kitDialog.open(UpdateKitComponent,{
        width: '40%',
        autoFocus: false,
        disableClose:true
    })
  }

  //for the search funtion
  search(){
    if(this.searchStr=="") {
      this.ngOnInit(); //if user cancel the saerching, return the test kit list
    } else{
        this.testKits = this.kitsService.getTestKit().filter(res=>{
            //return the filter array
            return res.testName.toLocaleLowerCase().match(this.searchStr.toLocaleLowerCase());
            })
        }   
    
    }

    //for the sort table
    sortKit(sort:MatSort){
        const kit_data = this.kitsService.getTestKit().slice(); //retrive original data from service
        if(!sort.active || sort.direction === ''){ //if the sort are not active, return original order
            this.testKits = kit_data;
            return;
        }
        this.testKits = kit_data.sort((a,b) => { //for the sort header
            const isAsc = sort.direction === 'asc';
            switch (sort.active) { //to identify which header sort is active and return the order
                case 'tname':
                    return compare(a.testName,b.testName,isAsc);
                case 'stockNo':
                    return compare(a.availableStock,b.availableStock,isAsc);
                default:
                    return 0;
            }
        })
    }
}

//for compare the order of data a and b, used in the sort method
function compare(a: String | number, b: String | number, isAsc:boolean){
    return (a < b ? -1: 1) * (isAsc ? 1 : -1);
}

