import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTesterComponent } from '../add-tester/add-tester.component';
import { TestersService } from "../tester.service";
import { Tester } from '../tester.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'tester-info',
  templateUrl: './tester-info.component.html',
  styleUrls: ['./tester-info.component.css']
})
export class TesterInfoComponent implements OnInit{
    testers: Tester[] = [];

    searchStr:String;
    tableColumns:String[] =['name','username'];
    
    // @ViewChild(MatSort) sort:MatSort;

    constructor(public recordDialog:MatDialog,public testersService:TestersService) { }    

    ngOnInit(){
       this.testers = this.testersService.getTesters();
       this.testers.sort;
       console.log(this.testers);
    }

    recDialog(){
        this.recordDialog.open(AddTesterComponent,{
            width:"40%",
            autoFocus:false
        });
    }

    searchTester(){
        if(this.searchStr=="") {
          this.ngOnInit();
        } else{

          this,this.testers = this.testers.filter(res=>{
            return res.name.toLocaleLowerCase().match(this.searchStr.toLocaleLowerCase());
        })

        }
    }

    sortTester(sort:MatSort){
        const tester_data = this.testersService.getTesters().slice();
        if(!sort.active || sort.direction === ''){
            this.testers = tester_data;
            return;
        }

        this.testers = tester_data.sort((a,b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name,b.name,isAsc);
                default:
                    return 0;
            }
        })
    }

    // deleteTester(username:String, name:String){
    //     this.testersService.getTesters().forEach(tester=>{
    //         if(tester.username == username){
    //             if(tester.name == name){
    //                 this.testersService.getTesters().
    //             }
    //         }
    //     })
    // }
}

function compare(a: String | number, b: String | number, isAsc:boolean){
    return (a < b ? -1: 1) * (isAsc ? 1 : -1);
}
