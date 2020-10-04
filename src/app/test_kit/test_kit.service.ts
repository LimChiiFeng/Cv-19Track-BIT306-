import { TestKit } from "./test_kit.model";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TestKitsService {
  private testKit: TestKit[] = [
    {kitID: 2, testName:'Test Kit 1', availableStock: 10, centreID: 1},
    {kitID: 5, testName:'Test Kit 3', availableStock: 2, centreID: 1},
    {kitID: 6, testName:'Test Kit 2', availableStock: 25, centreID: 1},
    {kitID: 7, testName:'Test Kit 6', availableStock: 6, centreID: 1},
    {kitID: 9, testName:'Test Kit 8', availableStock: 2, centreID: 1},
    {kitID: 10, testName:'Test Kit 4', availableStock: 50, centreID: 1},
    {kitID: 11, testName:'Test Kit 5', availableStock: 14, centreID: 1},
    {kitID: 16, testName:'Test Kit 7', availableStock: 9, centreID: 1},
  ];

  //

  getTestKit(){
    return this.testKit;
  }

  addTestKit(testName:String, availableStock:number){
    // console.log(this.getTestKit());
    var kitID;

    if(this.getTestKit().length==0){
      kitID = this.getTestKit().length + 1;
    } else {
      kitID = this.getTestKit()[this.getTestKit().length-1].kitID + 1;
    }

    const testKit: TestKit =  {kitID: kitID, testName:testName, availableStock:availableStock, centreID:null}
    this.testKit.push(testKit);
  }

  updateStockNum(kitID:number, stockNum: number){
      this.testKit.forEach(kit => {
          if(kit.kitID == kitID) {
              console.log('testName: '+ kit.testName)
              console.log('kitID: ' + kit.kitID)
              console.log('Stock before:' + kit.availableStock)
              kit.availableStock += stockNum;
              console.log('Stock after: ' + kit.availableStock)
          }
      });
  }

  checkEmpty(){
      if(this.testKit.length==0){
        return false;
      } else{
          return true;
      }
  }
}
