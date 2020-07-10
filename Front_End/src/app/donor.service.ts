import { Injectable } from '@angular/core';
import {Donordata} from 'Models/donordata.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonorService {
  donor:Donordata;
  donor_id:number;
  flg:boolean;
  toset:boolean;
  donated:string;
  constructor(private http:HttpClient) { }

  private getalldonorsURL='http://localhost:3000/donor/getalldonors';
  private donorsignupURL = 'http://localhost:3000/donor/signup';
  private donorsigninURL='http://localhost:3000/donor/signin';
  private delparticulardonorURL='http://localhost:3000/donor/delete';
  private recoverpassURL='http://localhost:3000/donor/recoverpass';
  private deletebypermissionURL ='http://localhost:3000/donor/deletebypermission';
  getDonors()
  {
    return this.http.get(this.getalldonorsURL);
  }

  
  //to submit data when donor fill signup form
  postDonor(donor:Donordata)
  {
    return this.http.post(this.donorsignupURL,donor)
  }
  
  //to verify donor while signin
  checkDonor(donor:Donordata)
  {
    return this.http.post(this.donorsigninURL,donor)
  }

  //to delete donor
  deleteDonor(donor:Donordata)
  {
    console.log(donor)
    return this.http.post(this.delparticulardonorURL,donor);

  }

  //delete by permission of donor
  deleteByPermission(donor:Donordata)
  {
    return this.http.post(this.deletebypermissionURL,donor);
  }


  sendEmail(donor:Donordata)
  {
    console.log('inside donor service')
      return this.http.post('http://localhost:3000/donor/sendemail',donor)
  }

  //to recover password
  recoverPass(donor:Donordata)
  {
    console.log('inside reocver service')
    console.log(donor);
    return this.http.post(this.recoverpassURL,donor)
  }
  isdonated()
  {
    console.log(sessionStorage.getItem('id'));
    this.donated = sessionStorage.getItem('id');
    if (this.donated=='no') {
      
      return false;
    }
    else {
      
      return true;

    }
  }

}
