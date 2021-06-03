import { Component, OnInit } from '@angular/core';
import { Receiverdata } from 'Models/receiverdata.model';
import { ReceiverService } from 'src/app/receiver.service';
import { Donordata } from 'Models/donordata.model';
import {DonorService } from 'src/app/donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor1',
  templateUrl: './donor1.component.html',
  styleUrls: ['./donor1.component.css']
})
export class Donor1Component implements OnInit {

  donoremail:string;
  showreceivers:boolean=false;//to display all receivers 
  donate:boolean=false;//to select items to donate
  showlocation:boolean=false;//to search ngo
  showdelete:boolean=false;
  // isUserdonated=false;//
  receiverdata: Receiverdata;
  receiverarray: Receiverdata[];
  food:boolean=false;
  cloth:boolean=false;
  money:boolean=false;
  other:boolean=false;
  d:Donordata;

  email:string
  constructor(public receiver: ReceiverService, public donorservice: DonorService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('status', 'on_page');
    //taking email from local storage and set in session storage
    sessionStorage.setItem('email',localStorage.getItem('email'));
  
    this.email=sessionStorage.getItem('email');
    
  }

  getallreceivers() {
    if (!this.showreceivers)//if false
    {
      console.log(this.email);
      //first set othe false so it will not display other componets
      this.showlocation=false;
      this.donate=false;
      
     
      this.showreceivers = true;
      this.receiver.getReceivers().subscribe((res) => {
        this.receiverarray = res as Receiverdata[];
      });
         this.showreceivers=true;
    }
    else {
      this.showreceivers = false;
    }
    
  }

  displayDonateItems()
  {
    if(!this.donate)//if not display then display
    {
      console.log(this.email);
      //first set othe false so it will not display other componets
      this.showlocation = false;
      this.showreceivers= false;
      //set true and  display this component
      this.donate = true;
    }
    else 
      this.donate=false;
  }

 
  donateToThisNgo(receiver:Receiverdata)
  {
    //  this.donoremail = sessionStorage.getItem('email');
    this.d = new Donordata(this.email,receiver.email,this.food,this.cloth,this.money,this.other);

   
    if(this.food ||  this.cloth || this.money || this.other)//if selected
    {
      this.donorservice.sendEmail(this.d).subscribe((res) => {
        if (res == true) {
          window.alert('Notification send to NGO ' + receiver.ngoname);
          //After donation all items set to false again
          this.food=false;
          this.cloth=false;
          this.money=false;
          this.other=false;


         
        }
        else
          console.log('error in sending notification')
      })
      sessionStorage.setItem('id','yes');
      
    }
    else
      window.alert('first select Items to donate');
  }

  //for map
  searchLocation() {
    if (!this.showlocation)
    {
      //first set othe false so it will not display other componets
      this.donate = false;
      this.showreceivers = false;
      //set true and  display this component
      this.showlocation = true;
    }
    else
      this.showlocation = false;
  }

  //to delete account
  deleteAaccount()
  {
    if(window.confirm('Are you sure want to delete'))
    {
   
     var donordata=new Donordata(this.email,'',true,true,true,true);
      this.donorservice.deleteByPermission(donordata).subscribe((res)=>{
          if(res==true)
          {
            // sessionStorage.clear();
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
  Logout()
  {
      sessionStorage.setItem('logout','yes')
      this.router.navigate(['home'])
  }
}
