import { Component, OnInit } from '@angular/core';
import  {DonorService} from '../donor.service'
import {ReceiverService} from '../receiver.service'
import { Donordata } from 'Models/donordata.model';
import { Receiverdata } from 'Models/receiverdata.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Form, Validators/**for validatio  purpose */ } from '@angular/forms'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pageTitle:String="😎Admin😎"
  adminform:FormGroup
  id: Number;
  donordata: Donordata;
  receiverdata: Receiverdata;
  hname: Donordata["hname"];
  email: string
  showdonors: Boolean = false;
  showreceivers: Boolean = false;
  valid: boolean = false;
  donorarray: Donordata[];
  receiverarray: Receiverdata[];
  ngOnInit(): void {
    sessionStorage.setItem('status','admin');

  }
  constructor(public donor: DonorService, private router: Router,public receiver:ReceiverService,private fb:FormBuilder) {
    this.adminform = fb.group({
      adminname: ['', Validators.required],
      adminpassword: ['',Validators.required]
    })
   
  }
submit(f:any)
{
  var username=this.adminform.get('adminname').value;
  var pass=this.adminform.get('adminpassword').value;
  if(username=="admin" && pass=="admin")
  {
    this.valid = true;
    sessionStorage.setItem('status', 'on_page');
  }
  else 
  {
    this.valid = false;
    window.alert('Please check user name and password');
  }
    
  

}

 getalldonors()
  {

      if(!this.showdonors)//if false
      {
        this.showreceivers=false;
        this.showdonors=true;//set true and display
          this.donor.getDonors().subscribe((res)=>{
          console.log(res);
          this.donorarray=res as Donordata[];
        })    
      }
      else if(this.showdonors)//if display then not display
      {
        this.showdonors=false;
      }
    // if(this.showdonors==false)
    
  }

  getallreceivers()
  {
    if(!this.showreceivers)//if false
    {
      this.showdonors=false;
      this.showreceivers=true;//set true and display
      this.receiver.getReceivers().subscribe((res) => {
        this.receiverarray = res as Receiverdata[];
      });
    }
    else 
    {
      this.showreceivers=false;
    }

  }

  deleteDonor(donordata)
  {
    console.log(donordata);
    this.donor.deleteDonor(donordata).subscribe((res)=>{
      if(res==true)
      {
        console.log('deleted');
        this.showdonors=!this.showdonors;
        this.getalldonors();
      }
      else 
        console.log('not deleted')

    })

  }
  deleteReceiver(receiverdata) {
    console.log(receiverdata);
    this.receiver.deleteReceiver(receiverdata).subscribe((res) => {
      if (res == true) {
        console.log('deleted');
        this.showreceivers=!this.showreceivers;
        this.getallreceivers();
      }
      else
        console.log('not deleted')

    })

  }

  //for Logout
  Logout() {
    sessionStorage.setItem('logout', 'yes')
    this.router.navigate(['home'])
  }
}
