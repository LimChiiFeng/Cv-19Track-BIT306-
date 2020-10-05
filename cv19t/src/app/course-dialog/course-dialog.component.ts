import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig } from "@angular/material/dialog";
import { RecordNewTest } from '../recordNewTest/recordnewtest.component';

@Component({
  selector:'courseform',
  templateUrl:'course-dialog.component.html'
})

export class CourseDialogComponent {
  dialogresult: RecordNewTest;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dconfig = new MatDialogConfig();

    dconfig.disableClose = true;
    dconfig.autoFocus = true;

    dconfig.data = {
      id:1,
      title:'Angular For Beginner'
    };


    const dialogRef = this.dialog.open(RecordNewTest, dconfig);


    dialogRef.afterClosed().subscribe(
      data => {console.log("Dialog output: ", data);
      this.dialogresult = data;
    });
  }
}
