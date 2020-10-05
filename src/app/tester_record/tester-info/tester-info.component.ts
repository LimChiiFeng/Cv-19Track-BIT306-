import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTesterComponent } from '../add-tester/add-tester.component';
import { TestersService } from "../tester.service";
import { Tester } from '../tester.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'tester-info',
  templateUrl: './tester-info.component.html',
  styleUrls: ['./tester-info.component.css']
})
export class TesterInfoComponent implements OnInit{
    testers: Tester[] = [];
    testersData: MatTableDataSource<Tester>;

    @ViewChild(MatSort) sort:MatSort;
    @ViewChild(MatPaginator) paginator:MatPaginator;
    // testersData:MatTableDataSource<Tester> = new MatTableDataSource<Tester>(this.testers);

    searchStr:String;
    tableColumns:String[] =['name','username','password'];
    
    // @ViewChild(MatSort) sort:MatSort;

    constructor(public recordDialog:MatDialog,public testersService:TestersService) { }    

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.testersData.sort = this.sort;
        this.testersData.paginator = this.paginator;
    }

    ngOnInit(){
       this.testers = this.testersService.getTesters();
       this.testersData = new MatTableDataSource(this.testers);
    //    this.testers.sort;
       console.log(this.testers);
       console.log(this.testersData)
    }

    recDialog(){
        const dialogRef = this.recordDialog.open(AddTesterComponent,{
            width:"40%",
            autoFocus:false
        });

        dialogRef.afterClosed().subscribe(res=>{
            this.testersData = new MatTableDataSource(this.testers);
        })
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

    searchData(e:Event){
        const result = (e.target as HTMLInputElement).value;
        this.testersData.filter = result.trim().toLocaleLowerCase();
        if(this.testersData.paginator){
            this.testersData.paginator.firstPage();
        }

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
