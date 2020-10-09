import { TestKit } from "./test_kit.model";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TestKitsService {
  private testKit: TestKit[] = [
    // {kitID: 2, testName:'Rapid Test Kit', availableStock: 10, centreID: 1},
    // {kitID: 5, testName:'RTK Test for Antigen Detection', availableStock: 2, centreID: 1},
    // {kitID: 6, testName:'Rapid Diagnostic Test', availableStock: 25, centreID: 2},
    // {kitID: 7, testName:'PCR Test', availableStock: 6, centreID: 2},
    // {kitID: 9, testName:'Neutralizing vs. Binding Antibodies', availableStock: 2, centreID: 1},
    // {kitID: 20, testName:'Enzyme-linked Immunosorbent Assay', availableStock: 50, centreID: 2},
    // {kitID: 11, testName:'Neutralization Assay', availableStock: 14, centreID: 1},
    // {kitID: 16, testName:'Chemiluminescent Immunoassay', availableStock: 9, centreID: 1},
  ];

  getTestKit(){
    return this.testKit;
  }

  getTestKitByCentre(centreID: number){
    let testKitByCentre: TestKit[] = [];
    this.testKit.forEach(res=>{
        if(res.centreID==centreID){
            testKitByCentre.push(res);
        }
    })
    return testKitByCentre;
  }

  addTestKit(testName:String, availableStock:number){
    var kitID = 0;

    if(this.getTestKit().length==0){
      kitID = this.getTestKit().length + 1;
    } else {
        this.getTestKit().forEach(res=>{
            if(kitID < res.kitID){
                kitID = res.kitID;
            }
        })
        kitID++;
    }

    const testKit: TestKit =  {kitID: kitID, testName:testName, 
        availableStock:availableStock, centreID:null}
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


