import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';

import { Donor1Component } from './Donor/donor1/donor1.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<Donor1Component>{
   canDeactivate():boolean{
     sessionStorage.clear();
     return window.confirm('Are you sure to leave without donation')
    
   }
  
}
