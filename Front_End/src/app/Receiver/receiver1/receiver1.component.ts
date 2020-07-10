import { Component, OnInit } from '@angular/core';
import { Donordata } from 'Models/donordata.model';
import { DonorService } from 'src/app/donor.service';
import {ReceiverService} from 'src/app/receiver.service';
import { Router } from '@angular/router';
import { Receiverdata } from 'Models/receiverdata.model';
@Component({
  selector: 'app-receiver1',
  templateUrl: './receiver1.component.html',
  styleUrls: ['./receiver1.component.css']
})
export class Receiver1Component implements OnInit {

  showdonors: Boolean = false;
  showtopdonors:Boolean=false;
  showlocation: boolean = false;
  donorarray: Donordata[];
  topdonorarray:Donordata[];
  email:string;
  constructor(public donor: DonorService, private router: Router,private recerver:ReceiverService) { }

  ngOnInit(): void {
    sessionStorage.setItem('status', 'on_page');
    
    //taking email from local storage and set in session storage
    sessionStorage.setItem('email', localStorage.getItem('email'));

    this.email = sessionStorage.getItem('email');
   
  }

  getalldonors() {

    if (!this.showdonors)//if false
    {
      //making other false 
      this.showlocation=false;
      this.showtopdonors=false;

      this.showdonors = true;//set true and display
      this.donor.getDonors().subscribe((res) => {
        console.log(res);
        this.donorarray = res as Donordata[];
      })
    }
    else if (this.showdonors)//if display then not display
    {
      this.showdonors = false;
    }
    // if(this.showdonors==false)

  }
  getIndescendingOrder()
  {
    if(!this.showtopdonors)
    {
      //making other false 
      this.showlocation = false;
      this.showdonors = false;

      this.showtopdonors=true;
      this.donor.getDonors().subscribe((res) => {
        this.topdonorarray=res as Donordata[];
        // console.log(this.topdonorarray);
        this.topdonorarray.sort((a,b)=>(a.count < b.count) ? 1 : -1 );
      })
    }
    else if(this.showtopdonors)
    {
      this.showtopdonors=false;
    }
     
  }
  searchLocation() {
    if(!this.showlocation)
    {
      //making other false 
      this.showdonors = false;
      this.showtopdonors = false;
      this.showlocation = true;
    }      
      else
      this.showlocation=false;
  }


  deleteAaccount() {
    if (window.confirm('Are you sure want to delete')) {

      var receiver = new Receiverdata(this.email);
      this.recerver.deleteByPermission(receiver).subscribe((res) => {
        if (res == true) {
          sessionStorage.setItem('logout', 'yes')
          this.router.navigate(['home']);
        }
        else
          console.log('error in delete donor inside particulat donor')
      });

    }
    else
      console.log('not');


  }


  //for Logout
  Logout() {
    sessionStorage.setItem('logout', 'yes')
    this.router.navigate(['home'])
  }
  


}
