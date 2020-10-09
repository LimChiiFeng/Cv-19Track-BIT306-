import { Component, OnInit} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { RecordNewTest } from '../recordNewTest/recordnewtest.component';
import { Patient, Test } from '../testReport.model';
import { TestReportService } from '../testReport.service';
import { UpdateDialogComponent } from '../update-dialog.component/update-dialog.component';

@Component({
  selector:'testlist',
  templateUrl:'./testlist.component.html',
  styleUrls:['./testlist.component.css']
})


export class TestListComponent implements OnInit{
  testlists:Test[]=[];
  patientlist:Patient[]=[];
  lists:any[]=[];
  testresult:string = "none";
  srchStr:string;
  patientrtn:any;
  constructor(public testreportservice:TestReportService, public dialog:MatDialog){}

  ngOnInit(){
    this.testlists=this.testreportservice.getTest();
    this.patientlist= this.testreportservice.getPatient();
    this.lists=this.testreportservice.getTestSrchList();


    console.log(this.lists);
  }
  searchTest(){
    if(this.srchStr == ""){
      this.ngOnInit();
      console.log("if was blank statement");
      console.log(this.testlists);
    }
    else{
      this.lists = this.testreportservice.getTestSrchList().filter(res=>{
        return res.TestID.match(this.srchStr);
      });
      console.log("Go to else");
      // console.log(this.testlists);
      // console.log(this.testreportservice.getTest());
    }
  }
  findPatient(patientusername:string){
    console.log("run function");
      this.testreportservice.getPatient().forEach(pat=>{
        if(pat.username == patientusername){
          console.log(pat);
          return pat.patientName;
        }
      })
  }
  onAddTestDialog(){
    const dialogRef = this.dialog.open(RecordNewTest, {
      disableClose: false,autoFocus: true});
      dialogRef.afterClosed().subscribe(res=>{
        console.log(this.testlists);
        this.ngOnInit();
        // console.log("右上角的");
      })
        // console.log("第二个的");
        // console.log(this.testlists);
        // console.log(this.testreportservice.getTest())
  }

  show(test){
    this.dialog.open(UpdateDialogComponent,{autoFocus:true,data:{psdata:test}});
  }

  removeTest(test){
    this.testreportservice.removeTest(test);
    this.ngOnInit();
  }
}
