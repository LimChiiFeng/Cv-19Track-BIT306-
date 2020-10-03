import { Component,Input,OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(public kitDialog: MatDialog, public kitsService: TestKitsService){}
  testKits: TestKit[] = [];
  searchStr:String;
  // searchName: String;

  // tableColumns: string[] = ['testName','availableStock'];
  // columnsToDisplay: string[] = this.tableColumns.slice();

  kitsData = new MatTableDataSource(this.testKits);

  addKitDialog(){
    // console.log(this.kitsData._filterData);
    console.log(this.kitsService.checkEmpty())

    const dialogRef=this.kitDialog.open(AddKitComponent,{
      width:'40%',
      autoFocus: false
    })
  }

  updateKitDialog(){
    this.kitDialog.open(UpdateKitComponent,{
        width: '40%',
        autoFocus: false
    })
  }

  search(){
    // console.log('Search Function Console:')
    // console.log(this.testKits);
    // console.log(this.searchStr);
    if(this.searchStr=="") {
        // console.log('If the search string is null')
        // console.log(this.testKits)
      this.ngOnInit();
    } else{
        // console.log('If the string not NULL');
        // console.log(this.testKits)
      this.testKits = this.testKits.filter(res=>{
        return res.testName.toLocaleLowerCase().match(this.searchStr.toLocaleLowerCase());
    })
    //   console.log('After searching');
    //   console.log(this.testKits);
    }
    
}
  // searchKit(event: Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
    // this.testKits.filter = filterValue.trim().toLowerCase();
  // }

  // searchKit(){
  //   this.testKits = this.testKits.filter(res=>{
  //     return res.testName.toLocaleLowerCase(this.searchName.toLocaleLowerCase());
  //   })
  // }

  ngOnInit(){
    this.testKits= this.kitsService.getTestKit();
  }



  
}
