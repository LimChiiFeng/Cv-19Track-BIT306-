import { Component } from '@angular/core';

@Component({
  selector:'message',
  templateUrl:'./message.component.html',
  styleUrls:['./message.component.css']
})

export class MessageComponent{
  /**form: FormGroup;
    description:string;
    testresult:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialog
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
        this.testresult = data.testresult;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
            testresult: [this.testresult, []]
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }**/
}

