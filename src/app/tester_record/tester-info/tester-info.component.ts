import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTesterComponent } from '../add-tester/add-tester.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'tester-info',
  templateUrl: './tester-info.component.html',
  styleUrls: ['./tester-info.component.css']
})
export class TesterInfoComponent implements OnInit{
    testers: User[]=[];

    //For mat-table function
    testersData: MatTableDataSource<User>;
    tableColumns:String[] =['name','username','password'];

    @ViewChild(MatSort) sort:MatSort;
    @ViewChild(MatPaginator) paginator:MatPaginator;

    constructor(public recordDialog:MatDialog,
        public userService: UsersService) { }    

    //To use the sort and paginator function that build
    //in the mat-table material
    ngAfterViewInit(): void {
        this.testersData.sort = this.sort;
        this.testersData.paginator = this.paginator;
    }

    ngOnInit(){
        this.testers = this.userService.getUser().filter(res=>{
            return res.position == 'Tester';
        })
       this.testersData = new MatTableDataSource(this.testers);
    }

    //To open a dialog for recording new Tester
    recDialog(){
        const dialogRef = this.recordDialog.open(AddTesterComponent,{
            width:"40%",
            autoFocus:false,
            disableClose:true
        });
        dialogRef.afterClosed().subscribe(res=>{
            this.ngOnInit();
        })
    }

    //For the search bar function
    searchData(e:Event){
        const result = (e.target as HTMLInputElement).value;
        this.testersData.filter = result.trim().toLocaleLowerCase();
        if(this.testersData.paginator){
            this.testersData.paginator.firstPage();
        }

    }
}


