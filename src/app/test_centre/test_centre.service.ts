import { TestCentre } from './test_centre.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class TestCentreService {
  private centre: TestCentre[] = [];

  getCentre(){
    return this.centre;
  }

  createCentre(centreName:String){
    //Auto generate function
    var centreID: number = 0;

    if(this.getCentre().length==0){
        //set the id to 1 when it is a empty data
      centreID = this.getCentre().length + 1;
    } else {
        //to find the largest ID for generate continuously
        this.getCentre().forEach(res=>{
            if(centreID < res.centreID){
                centreID = res.centreID
            }
            centreID++;
        })
    }

    //push the Test Centre into array
    const centre: TestCentre = {centreID: centreID, centreName:centreName}
    this.centre.push(centre);
  }
}

