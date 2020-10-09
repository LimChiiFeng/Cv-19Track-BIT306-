export interface Test {
  TestID:string;
  testresult: string;

  testDate:Date;
  resultDate:Date;
  teststatus:string;
  patientusername:string;

}

export interface Patient {
  username:string;
  password:string;
  patientName:string;
  patienttype:string;
  symptom:string;


}

export interface TestKit{
  kitID: number,
  testName: String,
  availableStock: number,
  centreID: number
}

