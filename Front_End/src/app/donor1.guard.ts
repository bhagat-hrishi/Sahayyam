import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {DonorService} from './donor.service'

@Injectable({
  providedIn: 'root'
})
export class Donor1Guard implements CanActivate {
 
    
    constructor(private donorservice:DonorService,
                private _route:Router)
      {}
      canActivate():boolean{
         
         if(this.donorservice.isdonated())
         {
          //  this._route.navigate[('thankyou')];
          
           return true;
         }
         else 
          {
           window.alert(`Donor ${sessionStorage.getItem('email')} please select Item and donate`);
           this._route.navigate[('donor1')];
           return false;
          }
            
          
      }
}
