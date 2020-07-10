import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
 
  logout_status
  id;
  status
  constructor(private router:Router){

  }

  canActivate():boolean
  {
    this.logout_status= sessionStorage.getItem('logout');
    this.status=sessionStorage.getItem('status');
    if ((this.logout_status == 'yes') || this.status == 'home' || this.status == 'admin' || this.status == 'about' || this.status == 'signin' || this.status=='signup' || this.status=='app-component')
    { 
      sessionStorage.clear();
      return true;
     }
     else
    {
      
      window.alert('Please Click Logout Button');
      return false;
     
    }
      
  } 

}
