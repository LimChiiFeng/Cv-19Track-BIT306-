import { TestCentre } from './test_centre.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class TestCentreService {
  private centre: TestCentre[] = [
    // {centreID: 1, centreName:'Test Centre 1'},
    // {centreID: 4, centreName:'Chung Hwa Test Centre'},
    // {centreID: 7, centreName:'Test Centre 3'},
    // {centreID: 10, centreName:'Test Centre 4'}
   ];

  getCentre(){
    return this.centre;
  }

  createCentre(centreName:String){
    var centreID: number = 0;

    if(this.getCentre().length==0){
      centreID = this.getCentre().length + 1;
    } else {
        this.getCentre().forEach(res=>{
            if(centreID < res.centreID){
                centreID = res.centreID
            }
            centreID++;
        })
    //   centreID = this.getCentre()[this.getCentre().length-1].centreID + 1;
    }

    const centre: TestCentre = {centreID: centreID, centreName:centreName}
    this.centre.push(centre);
    // console.log('centreID: '+ centreID + ', centreName: ' + centreName);
    console.log(this.centre)
  }
}
